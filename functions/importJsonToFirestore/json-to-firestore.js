const admin = require('./../node_modules/firebase-admin');
const serviceAccount = require('./service-key.json');

const data = require('./data.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://arcadia-546ec.firebaseio.com',
});

// 123: {
//   used: true
// }
data &&
  Object.keys(data).forEach(key => {
    const nestedContent = data[key];
    // key -> 123
    // nestedContent -> used: true
    if (typeof nestedContent === 'object') {
      Object.keys(nestedContent).forEach(docTitle => {
        // docTitle -> used
        // nestedContent[docTittle] -> true
        admin
          .firestore()
          .collection('codigos')
          .doc(key)
          .set({
            [docTitle]: nestedContent[docTitle],
          })
          .then(res => console.log('Document successfully written!'))
          .catch(error => console.error('Error writing document: ', error));
      });
    }
  });
