
var a = 0;
function func() {
    let a = prompt('Add or Change The Title For Your Album')
    document.getElementById('h2').innerHTML = a
}
function func1() {
    let b = prompt('Add or Change Wish')
    document.getElementById('h1').innerHTML = b
}
function func2() {
    let b = prompt('Add or Change Wish')
    document.getElementById('h21').innerHTML = b
}
function func3() {
    let b = prompt('Add or Change Wish')
    document.getElementById('h3').innerHTML = b
}
function func4() {
    let b = prompt('Add or Change Wish')
    document.getElementById('h4').innerHTML = b
}
function func5() {
    let b = prompt('Add or Change Wish')
    document.getElementById('h5').innerHTML = b
}
function func6() {
    let b = prompt('Add or Change Your Final(Summary) Wish')
    document.getElementById('h6').innerHTML = b
}

function PreviewImage() {
    let img = new FileReader();
    img.readAsDataURL(document.getElementById("uploadImage").files[0]);
    document.getElementById('uploadImage').style.visibility = 'hidden'
    img.onload = function (loadimg) {
        document.getElementById("uploadPreview").src = loadimg.target.result;
    };
};

function PreviewImage1() {
    let img1 = new FileReader();
    img1.readAsDataURL(document.getElementById("up1").files[0]);
    document.getElementById('up1').style.visibility = 'hidden'
    img1.onload = function (loadimg1) {
        document.getElementById("img1").src = loadimg1.target.result;
    };
};
function PreviewImage2() {
    let img = new FileReader();
    img.readAsDataURL(document.getElementById("up2").files[0]);
    document.getElementById('up2').style.visibility = 'hidden'
    img.onload = function (loadimg) {
        document.getElementById("img2").src = loadimg.target.result;
    };
};
function PreviewImage3() {
    let img1 = new FileReader();
    img1.readAsDataURL(document.getElementById("up3").files[0]);
    document.getElementById('up3').style.visibility = 'hidden'
    img1.onload = function (loadimg1) {
        document.getElementById("img3").src = loadimg1.target.result;
    };
};
function PreviewImage4() {
    let img1 = new FileReader();
    img1.readAsDataURL(document.getElementById("up4").files[0]);
    document.getElementById('up4').style.visibility = 'hidden'
    img1.onload = function (loadimg1) {
        document.getElementById("img4").src = loadimg1.target.result;
    };
};
function PreviewImage5() {
    let img1 = new FileReader();
    img1.readAsDataURL(document.getElementById("up5").files[0]);
    document.getElementById('up5').style.visibility = 'hidden'
    img1.onload = function (loadimg1) {
        document.getElementById("img5").src = loadimg1.target.result;
    };
};
function PreviewImage6() {
    let img1 = new FileReader();
    img1.readAsDataURL(document.getElementById("up6").files[0]);
    document.getElementById('up6').style.visibility = 'hidden'
    img1.onload = function (loadimg1) {
        document.getElementById("img6").src = loadimg1.target.result;
    };
};

function img() {
    let a = document.getElementById('img1').getAttribute('src')
    document.getElementById('bruh').src = a
    document.getElementById('bruh').style.visibility = 'visible'
    document.getElementById('br').style.visibility = 'visible'
    document.getElementById('br2').style.visibility = 'visible'
}
function img2() {
    let a = document.getElementById('img2').getAttribute('src')
    document.getElementById('bruh').src = a
    document.getElementById('bruh').style.visibility = 'visible'
    document.getElementById('br').style.visibility = 'visible'
    document.getElementById('br2').style.visibility = 'visible'
}
function img3() {
    let a = document.getElementById('img3').getAttribute('src')
    document.getElementById('bruh').src = a
    document.getElementById('bruh').style.visibility = 'visible'
    document.getElementById('br').style.visibility = 'visible'
    document.getElementById('br2').style.visibility = 'visible'
}
function img4() {
    let a = document.getElementById('img4').getAttribute('src')
    document.getElementById('bruh').src = a
    document.getElementById('bruh').style.visibility = 'visible'
    document.getElementById('br').style.visibility = 'visible'
    document.getElementById('br2').style.visibility = 'visible'
}
function img5() {
    let a = document.getElementById('img5').getAttribute('src')
    document.getElementById('bruh').src = a
    document.getElementById('bruh').style.visibility = 'visible'
    document.getElementById('br').style.visibility = 'visible'
    document.getElementById('br2').style.visibility = 'visible'
}
function img6() {
    let a = document.getElementById('img6').getAttribute('src')
    document.getElementById('bruh').src = a
    document.getElementById('bruh').style.visibility = 'visible'
    document.getElementById('br').style.visibility = 'visible'
    document.getElementById('br2').style.visibility = 'visible'
}
function titleimg() {
    let a = document.getElementById('uploadPreview').getAttribute('src')
    document.getElementById('bruh').src = a
    document.getElementById('bruh').style.visibility = 'visible'
    document.getElementById('br').style.visibility = 'visible'
    document.getElementById('br2').style.visibility = 'visible'
}

function zout() {
    document.getElementById('bruh').style.visibility = 'hidden'
    document.getElementById('br').style.visibility = 'hidden'
    document.getElementById('br2').style.visibility = 'hidden'
}

function bc() {
    let bc = document.getElementById('bgcolor').value;
    document.getElementById('color').style.backgroundColor = bc
}

function row() {
            
    if (a == 0) {
        document.getElementById('bar').style.width = '1px';
        document.getElementById('arrow').innerHTML = '>>'
        document.getElementById('item1').style.visibility = 'hidden'
        a = 1
    } else {
        document.getElementById('bar').style.width = '100px';
        document.getElementById('arrow').innerHTML = '<<'
        document.getElementById('item1').style.visibility = 'visible'
        a = 0
    }

}


