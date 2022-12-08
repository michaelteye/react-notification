import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
    apiKey: "AIzaSyCeGR2888oD6mUvFDXEGhG0QLo8WMNDMAk",
    authDomain: "bezonotification.firebaseapp.com",
    databaseURL:"https://bezonotification-default-rtdb.firebaseio.com",
    projectId: "bezonotification",
    storageBucket: "bezonotification.appspot.com",
    messagingSenderId: "819772866681",
    appId: "1:819772866681:web:a58950a741bce61e7c14a8"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BHG1pTXdr9EJZZht6A2YoszceZh-QmfwPPFBH2cz36X1sgUlovy7CjhAnMviAqCIkdYuZ4qs_ZfV4fH6De0cI1c"
);

export { messaging };