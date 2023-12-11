 
 
 
var user = document.getElementById('user');
var settings = document.getElementById('settings')
var note = document.getElementById('note')
user.addEventListener('mouseover' , function() {
    let usname = document.getElementById('tag')
    usname.style.marginLeft = '1187px'
    usname.style.display = 'inline'
})

user.addEventListener('mouseleave' , function() {
    let usname = document.getElementById('tag')
    usname.style.display = 'none'
})
settings.addEventListener('mouseleave' , function() {
    let usname = document.getElementById('tag2')
    usname.style.display = 'none'
})

note.addEventListener('mouseleave' , function() {
    let usname = document.getElementById('tag3')
    usname.style.display = 'none'
})
settings.addEventListener('mouseover' , function() {
    let usname = document.getElementById('tag2')
    usname.style.marginLeft = '1053px'
    usname.style.display = 'inline'
})

note.addEventListener('mouseover' , function() {
    let usname = document.getElementById('tag3')
    
    usname.style.marginLeft = '1007px'
    usname.style.display = 'inline'
})
document.getElementById('disname').addEventListener('mouseover', function() {
    document.getElementById('tag4').style.display='inline-block'
    document.getElementById('tag4').style.top = '26%';
    document.getElementById('tag4').style.left='84%';
    
})
document.getElementById('disname').addEventListener('mouseleave', function() {
    document.getElementById('tag4').style.display='none'
})

document.getElementById('log-out').addEventListener('mouseover', function() {
    document.getElementById('tag5').style.display='inline-block'
    document.getElementById('tag5').style.top = '31%';
    document.getElementById('tag5').style.left='82.5%';
    
})
var clked =0
document.getElementById('user').addEventListener('click', function() {
    if (clked == 0) {
        document.getElementById('userprof').style.display = 'inline-block'
        clked =1
    } else if (clked == 1) {
        document.getElementById('userprof').style.display = 'none'
        clked =0
    }
})
document.getElementById('log-out').addEventListener('mouseleave', function() {
    document.getElementById('tag5').style.display='none'
})

var fav = document.getElementById('spark');
var cir = document.getElementById('circle')

fav.addEventListener('click', function() {
    let arr = document.getElementById('arr');
    arr.style.top = '84.5%'
    arr.style.left = '21.5%'
    document.getElementById('text').innerText = 'Models'
})
cir.addEventListener('click', function() {
    let arr = document.getElementById('arr');
    arr.style.top = '84.5%'
    arr.style.left = '21.5%'
})

var templ = document.getElementById('templ')
var cir2 = document.getElementById('circle2')

templ.addEventListener( 'click' , function() {
    let arr = document.getElementById('arr');
    arr.style.top = '84.5%'
    arr.style.left = '69.5%'
    document.getElementById('text').innerText = 'Templates'
})
cir2.addEventListener( 'click' , function() {
    let arr = document.getElementById('arr');
    arr.style.top = '84.5%'
    arr.style.left = '69.5%'
    document.getElementById('text').innerText = 'Templates'
})
var bars = document.getElementById('bar');
var x= 0;
bars.addEventListener( 'click', function(){
    if(x == 0) {
        document.getElementById('forbars').style.visibility = 'visible'
        x +=1
    } else if (x==1) {
        document.getElementById('forbars').style.visibility = 'hidden'
        x -=1
    }
})

document.getElementById('log-out').addEventListener('click', function() {
    window.location.href = './login+regis.html'
})