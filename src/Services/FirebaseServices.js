import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyADP0H1kUYGogA9M608zVDVcbKMa_4jcNc",
  authDomain: "notificationapp-cce58.firebaseapp.com",
  databaseURL: "https://notificationapp-cce58.firebaseio.com",
  projectId: "notificationapp-cce58",
  storageBucket: "notificationapp-cce58.appspot.com",
  messagingSenderId: "805033203601",
  appId: "1:805033203601:web:9ba3e08e977749ed42ac30"
};

firebase.initializeApp(firebaseConfig);
const  messaging = firebase.messaging();

export function initNotification () {
    Notification.requestPermission().then(      (permission)=> {
        console.log(permission)

        if(permission === "granted") {
            messaging.getToken().then((currentToken) => {

                if (currentToken) {
                    console.log("TOken =>", currentToken);
                
                } else {
              
                  console.log('No Instance ID token available. Request permission to generate one.');
          
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })

}