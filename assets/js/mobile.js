// Lay ra id header
var headerEl = document.getElementById('header');

// Lay ra id/phan tu mobile-menu
var mobileMenu = document.getElementById('mobile-menu');

// Lay ra chieu cao cua header
var headerHight = headerEl.clientHeight;


// Dong/Mo mobile menu
mobileMenu.onclick = function () {
    var isClosed = headerEl.clientHeight === headerHight;
    if(isClosed){
        headerEl.style.height = 'auto';
    }
    else{
        headerEl.style.height = null;
    }
}

// Tu dong dong mo khi chon menu
//Lay ra cac menu 
var menuItems = document.querySelectorAll('#nav li a[href*="#"');

for(var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];

    menuItem.onclick  = function(event){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(!isParentMenu){
            headerEl.style.height = null;
        }else{
            event.preventDefault();
        }
    }
}


// Submenu item