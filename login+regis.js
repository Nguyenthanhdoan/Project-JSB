

var login = document.getElementById('login');
var register = document.getElementById('register');
var btn = document.getElementById('btn');

function registered() {
    login.style.left = '-400px';
    register.style.left = '50px';
    btn.style.left = '110px';
}

function logined() {
    login.style.left = '50px';
    register.style.left = '450px';
    btn.style.left = '0';
}

var clkornot = 0;
var loginbtn = document.getElementById('login-btn');

loginbtn.addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var pass = document.getElementById('pass').value;
    if (username.length == 0) {
        document.getElementById('username').classList.add('invalid');
        document.getElementById('username').classList.add('logus');
        clkornot =1
    } else if (username.length != 0 && clkornot == 1) {
        document.getElementById('username').classList.remove('invalid');
        document.getElementById('username').classList.remove('logus');
        clkornot =0
    } else if (pass.length == 0) {
        document.getElementById('pass').classList.add('invalid');
        document.getElementById('pass').classList.add('logus');
        clkornot= 1
    } else if (pass.length != 0 && clkornot == 1) {
        document.getElementById('username').classList.remove('invalid');
        document.getElementById('username').classList.remove('logus');
        clkornot =0
    } else {
    window.location.href = './Homepage.html'
    }
})