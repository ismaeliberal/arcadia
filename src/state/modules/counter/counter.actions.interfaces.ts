export interface IncrementPayload {
  by: number;
}

export interface DecrementPayload extends IncrementPayload {
  // same as original
}

export interface IncrementAsyncPayloadStarted extends IncrementPayload {
  // same as original
}

export interface IncrementAsyncPayloadDone {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface DecrementAsyncPayloadStarted
  extends IncrementAsyncPayloadStarted {
  // same as original
}

export interface DecrementAsyncPayloadDone extends IncrementAsyncPayloadDone {
  // same as original
}
