
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

