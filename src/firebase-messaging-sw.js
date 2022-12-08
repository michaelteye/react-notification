// importScripts("https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.14.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyCeGR2888oD6mUvFDXEGhG0QLo8WMNDMAk",
    authDomain: "bezonotification.firebaseapp.com",
    databaseURL:"https://bezonotification-default-rtdb.firebaseio.com",
    projectId: "bezonotification",
    storageBucket: "bezonotification.appspot.com",
    messagingSenderId: "819772866681",
    appId: "1:819772866681:web:a58950a741bce61e7c14a8"
});

firebase.messaging();