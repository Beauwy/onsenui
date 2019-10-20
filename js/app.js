  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDpGGVZib9xCafbvGhoEj1T1-jJ0ptkab8",
    authDomain: "foodpj-9550d.firebaseapp.com",
    databaseURL: "https://foodpj-9550d.firebaseio.com",
    projectId: "foodpj-9550d",
    storageBucket: "foodpj-9550d.appspot.com",
    messagingSenderId: "603895277613",
    appId: "1:603895277613:web:e330f1b4fe8ad86b0870a4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Use firestore
var db = firebase.firestore();

window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};

var login = function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'bob' && password === 'secret') {
      ons.notification.alert('Congratulations!');
    } else {
      ons.notification.alert('Incorrect username or password.');
    }
  };