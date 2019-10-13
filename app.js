window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var menu = document.getElementById('menu');
  var navi = document.getElementById('navi');

  menu.close();
  navi.resetToPage(page, { animation: 'fade' });
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
