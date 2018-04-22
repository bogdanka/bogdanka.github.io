var menu = document.getElementById('nav');
var subMenu = document.getElementsByClassName('submenu');
var indicator = 0;


window.onresize = function(event){
    var width = window.innerWidth;
    if (width < 1024) {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function menuToggle() {
    if (indicator === 0) {
        menu.style.display = 'block';
        indicator = 1;
    } else {
        menu.style.display = 'none';
        indicator = 0;
    }
}

function closeSubmenu() {
    for (var j = 0; j < subMenu.length; j++) {
        subMenu[j].style.display = 'none';
    }
}

function submenuToggle(i) {
    if (subMenu[i].style.display !== 'block') {
        closeSubmenu();
        subMenu[i].style.display = 'block';
    } else {
        closeSubmenu();
    }
}






