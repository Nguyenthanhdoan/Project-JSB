var page = 1
var btn = document.getElementById('btn'); a = 1;
var btn2 = document.getElementById('btn2');
var back = document.getElementById('bt');
var pagenumber = document.getElementById('pagenum')
var clnext = document.getElementById('btn'); clback = document.getElementById('bt')
var counter = 0
var add= document.getElementById('add')
var b = -1
var img1 = 0 ; img2 = 0 ;img3 = 0;img4 = 0
add.classList.add('remove')
add.addEventListener('click', function() {
    if (b == 0) {
        document.getElementById('iw2').style.visibility = 'visible';
        img1 =1
        add.style.visibility='hidden'
    } else if (b == 1) {
        document.getElementById('iw3').style.visibility = 'visible'
        img2=1
        add.style.visibility='hidden'
    } else if ( b == 2 ) {
        document.getElementById('iw4').style.visibility = 'visible'
        add.style.visibility='hidden'
        img3=1
    } else if ( b == 3 ) {
        document.getElementById('iw5').style.visibility = 'visible'
        add.style.visibility='hidden'
        img4=1
    }
})
clnext.onclick = function() {
    counter += 1
    btn2.style.visibility =' hidden'
    a += 1
    pagenumber.innerText = a  
    page += 1
    b += 1
    if (counter == 4) {
        btn.style.visibility = 'hidden'
        document.querySelector('.btn').style.visibility = 'hidden'
    }

    if (counter == 1) {
        back.style.visibility = 'visible'
        add.classList.replace('remove', 'add')
    }   
    if (page != 1) {
        document.getElementById('iw1').style.visibility= 'hidden'
    } else if (page == 1) {
        document.getElementById('iw1').style.visibility= 'visible'
    }
    if (page == 2 && img1==1) {
        document.getElementById('iw2').style.visibility = 'visible'
    } else if (page == 2 && img1==0) {
        add.style.visibility='visible'
    } else {
        document.getElementById('iw2').style.visibility = 'hidden'
    }
    if (page == 3 && img2==1) {
        document.getElementById('iw3').style.visibility = 'visible'
    } else if (page == 3 && img2==0) {
        add.style.visibility='visible'
    } else {
        document.getElementById('iw3').style.visibility = 'hidden'
    }
    if (page == 4 && img3==1) {
        document.getElementById('iw4').style.visibility = 'visible'
    } else if (page == 4 && img3==0) {
        add.style.visibility='visible'
    } else {
        document.getElementById('iw4').style.visibility = 'hidden'
    }
    if (page == 5 && img4==1) {
        document.getElementById('iw5').style.visibility = 'visible'
    } else if (page == 5 && img4==0) {
        add.style.visibility='visible'
    } else {
        document.getElementById('iw5').style.visibility = 'hidden'
    }
    
}
clback.onclick = function() {
    counter -= 1
    a -= 1
    pagenumber.innerText = a
    page -= 1
    b -= 1
    if (counter <= 0) {
        btn2.style.visibility ='visible'
        document.getElementById('iw1').style.visibility= 'visible'
        back.style.visibility = 'hidden'
        add.classList.replace('add', 'remove')
      
        document.querySelector('.i').style.visibility ='hidden'
    }
    if (counter <= 4 ) {
        
        btn.style.visibility = 'visible'
    }
    if (page != 1) {
        document.getElementById('iw1').style.visibility= 'hidden'
    } else if (page == 1) {
        document.getElementById('iw1').style.visibility= 'visible'
        add.style.visibility='hidden'
    }
    if (page == 2 && img1==1) {
        document.getElementById('iw2').style.visibility = 'visible'
    } else if (page == 2 && img1==0) {
        add.style.visibility='visible'
    } else {
        document.getElementById('iw2').style.visibility = 'hidden'
    }
    if (page == 3 && img2==1) {
        document.getElementById('iw3').style.visibility = 'visible'
    } else if (page == 3 && img2==0) {
        add.style.visibility='visible'
    } else {
        document.getElementById('iw3').style.visibility = 'hidden'
    }
    if (page == 4 && img3==1) {
        document.getElementById('iw4').style.visibility = 'visible'
    } else if (page == 4 && img3==0) {
        add.style.visibility='visible'
    } else {
        document.getElementById('iw4').style.visibility = 'hidden'
    }
    if (page == 5 && img4==1) {
        document.getElementById('iw5').style.visibility = 'visible'
    } else if (page == 5 && img4==0) {
        add.style.visibility='visible'
    } else {
        document.getElementById('iw5').style.visibility = 'hidden'
    }
}


