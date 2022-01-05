
/**
 * Gets an element by its id
 * @param {*} id holds element id
 */
function getId(id)
{
    return document.getElementById(id);
}

// menu dropdown
var menu_toggle = getId('menu_toggle');
var menu_list = getId('menu_list');
var menu_icon = getId('menu_icon');
menu_toggle.addEventListener('click', (e) => {
    e.preventDefault();
    if(menu_list.classList.contains('slide-in'))
    {
        menu_list.classList.remove('slide-in');
        menu_list.classList.add('slide-out');

        menu_icon.classList.remove('fa-times');
        menu_icon.classList.add('fa-bars');
       
    }
    else
    {
        menu_list.classList.remove('slide-out');
        menu_list.classList.add('slide-in');
        
        menu_icon.classList.remove('fa-bars');
        menu_icon.classList.add('fa-times');
        
    }
});

// login modal
var reg_btn = document.getElementsByClassName("register_btn");

var cancel_btn = getId("login_cancel");
var login_modal = document.querySelector('.login-modal');
var login_box = document.querySelector('.login-box');

if(reg_btn) 
{
    for(var i = 0; i < reg_btn.length; i++) 
    {
        reg_btn[i].addEventListener('click', (e) => {
            e.preventDefault();
            login_modal.style.display = 'block';
        } );
    }
}

cancel_btn.addEventListener('click', () => {
    login_modal.style.display = 'none';
});

login_modal.addEventListener('click', () =>
{
    login_modal.style.display = 'none';
} );
login_box.addEventListener('click', (e) => {
    e.stopPropagation();
});

// image carousel

var current_img = 1;

carousel(current_img);

// carousel next and prev buttons

function to_carousel(image)
{
    carousel(current_img += image);
    return false;
    
}
function carousel(image)
{
    var i;
    var carousel_images = document.getElementsByClassName('carousel-img');
    
    if(image > carousel_images.length)
        current_img = 1;

    if(image < 1)
        current_img = carousel_images.length;
    
    // incase any carousel image is visible, set display to none
    for(i = 0; i < carousel_images.length; i++)
    {
        carousel_images[i].style.display = "none";
    }

    // make the current carousel index visible

    carousel_images[current_img - 1].style.display = "block";
}