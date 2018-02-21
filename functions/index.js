const functions = require('firebase-functions');
const admin = require('firebase-admin');
// require('firebase/firestore');
admin.initializeApp(functions.config().firebase);

var db = admin.firestore();

exports.codigoExiste = functions.firestore
  .document('users/{userId}')
  .onWrite(event => {
    const user = event.data.data();

    const getAllCodes = db.collection('codigos').get();

    return Promise.all([getAllCodes]).then(results => {
      const codes = results[0];
      codes.forEach(codeSnapshot => {
        console.log(codeSnapshot.id, '=>', codeSnapshot.data());
        const codeData = codeSnapshot.data();
        if (codeSnapshot.id === user.code && !codeData.used) {
          console.log('Mismo codigo y sin usar');
          changeCodeToUsed(codeSnapshot.id)
            .then(() => {
              let count = user.puntos;
              if (!user.puntos) {
                count = 0;
              }
              return event.data.ref.set({ puntos: count + 1 }, { merge: true });
            })
            .catch(error => {
              console.log('Error adding document: ', error);
            });
        }
      });
    });
  });

const changeCodeToUsed = codeId => {
  return db
    .collection('codigos')
    .doc(codeId)
    .set({
      used: true,
    });
};
