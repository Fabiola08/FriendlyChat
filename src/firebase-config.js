/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

  const config = {
    apiKey: "AIzaSyCNDIRF2GL8prQ_aIGUPWsoQbZ8HNzC82g",
    authDomain: "friendlychat-6efc3.firebaseapp.com",
    projectId: "friendlychat-6efc3",
    storageBucket: "friendlychat-6efc3.appspot.com",
    messagingSenderId: "595356637031",
    appId: "1:595356637031:web:c312622315448de33bc1c2"
  };


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}