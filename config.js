// CE CORE settings. Paste your Firebase web app values here (see SETUP.md, step 4).
// These values are NOT secrets. Your data is protected by the rules in firestore.rules.
window.CE_CONFIG = {
  firebase: {
    apiKey: "AIzaSyDb0GDZaw0dBPFzzUVtrS3PcGOS9eAPt6Q",
    authDomain: "ce-core-d6ab9.firebaseapp.com",
    projectId: "ce-core-d6ab9",
    storageBucket: "ce-core-d6ab9.firebasestorage.app",
    messagingSenderId: "216850373202",
    appId: "1:216850373202:web:a10507c45dc4f331179d8b"
  },
  // The email address(es) allowed to sign in as CORE Coach, in lower case.
  // The same address must also be in firestore.rules and created in Firebase (SETUP.md, step 3).
  coachEmails: ["johncarlobasit@cecore.edu"]
};
