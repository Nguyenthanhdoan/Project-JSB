

function zout() {
    document.getElementById('bruh').style.visibility = 'hidden'
    document.getElementById('br').style.visibility = 'hidden'
    document.getElementById('br2').style.visibility = 'hidden'
} // contradicts the upper func
function bc() {
    let bc = document.getElementById('bgcolor').value;
    document.getElementById('color').style.backgroundColor = bc
} // bg-color func
function show() {
    document.getElementById('color-bg').style.visibility = 'visible';
} // open bg-color
function exit() {
    document.getElementById('color-bg').style.visibility = 'hidden';
} // close bg-color
function exit2() {
    document.getElementById('edit').style.visibility = 'hidden';
} //close edit
function reset() {
    document.getElementById('color').style.backgroundColor = 'bisque'
} //reset bg-color
function rotate() {
    document.getElementById('nav').classList.toggle('shrink');
    document.getElementById('arrow').classList.toggle('ar');
    document.getElementById('asd').classList.toggle('hide');
} // shrink or enlarge nav bar

// 1, em tạo class -> width thu nhỏ + các thành phẩn ẩn đi
// 2 tạo 1 class -> width mở rộng + các thành phần k ẩn. 
// 3. sử dụng thẻ div bọc các thành phần đó. áp dụng classlist vào.

function editshow() {
    document.getElementById('edit').style.visibility = 'visible'
} // open edit


dragElement(document.getElementById('edit'));
function dragElement(elmnt) {
    let pos1 = 0; pos2 = 0; pos3 = 0; pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {ocument.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }


    function dragMouseDown(e) {
        e = e || window.Event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.Event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
}
}   //drag for img edit

dragElement(document.getElementById('color-bg'));
function dragElement(elmnt) {
    let pos1 = 0; pos2 = 0; pos3 = 0; pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {ocument.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }


    function dragMouseDown(e) {
        e = e || window.Event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.Event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
}
}   //drag for colorbg

// function doUndo() {
//     document.com('undo', false, null);
// }

// function doRedo() {
//     document.execCommand('redo', false, null);
// }
function img() {
    let a = document.getElementById('img1').getAttribute('src')
    document.getElementById('bruh').src = a
    document.getElementById('bruh').style.visibility = 'visible'
    document.getElementById('br').style.visibility = 'visible'
    document.getElementById('br2').style.visibility = 'visible'
} // enlarge img 1
function PreviewImage1() {
    let img1 = new FileReader();
    img1.readAsDataURL(document.getElementById("up1").files[0]);
    document.getElementById('up1').style.visibility = 'hidden'
    img1.onload = function (loadimg1) {
        document.getElementById("img1").src = loadimg1.target.result;
    };
}; //upload img 1
function func1() {
    let b = prompt('Add or Change Wish')
    document.getElementById('h1').innerHTML = b
} //add wish img 1


function save() {
    document.getElementById('si1').src = document.getElementById('img1').getAttribute('src')
    document.getElementById('sh1').innerHTML = document.getElementById('h1').innerHTML
    document.getElementById('si2').src = document.getElementById('img2').getAttribute('src')
    document.getElementById('sh2').innerHTML = document.getElementById('h2').innerHTML
    document.getElementById('si3').src = document.getElementById('img3').getAttribute('src')
    document.getElementById('sh3').innerHTML = document.getElementById('h3').innerHTML
    document.getElementById('si4').src = document.getElementById('img4').getAttribute('src')
    document.getElementById('sh4').innerHTML = document.getElementById('h4').innerHTML
    document.getElementById('si5').src = document.getElementById('img5').getAttribute('src')
    document.getElementById('sh5').innerHTML = document.getElementById('h5').innerHTML

}


function load() {
    document.getElementById('img1').src = document.getElementById('si1').getAttribute('src')

}