importScripts('https://www.gstatic.com/firebase/7.21.1/firebase-app.js');
importScripts('https://www.gstatic.com///firebase/7.21.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyADP0H1kUYGogA9M608zVDVcbKMa_4jcNc",
    authDomain: "notificationapp-cce58.firebaseapp.com",
    databaseURL: "https://notificationapp-cce58.firebaseio.com",
    projectId: "notificationapp-cce58",
    storageBucket: "notificationapp-cce58.appspot.com",
    messagingSenderId: "805033203601",
    appId: "1:805033203601:web:9ba3e08e977749ed42ac30"
  };


  firebaseConfig.initializeApp(firebaseConfig);