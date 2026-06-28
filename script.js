const close_list = document.getElementById('close-btn');
const menu_list = document.getElementById('open-btn');
const list =document.getElementById('list');



menu_list.addEventListener('click',function(){
    list.classList.add('show');
    menu_list.classList.add('show');
    close_list.classList.add('show');
});
close_list.addEventListener('click',function(){
    list.classList.remove('show');
    close_list.classList.remove('show');
    menu_list.classList.remove('show');
});
list.addEventListener('click',function(){
    list.classList.remove('show');
    close_list.classList.remove('show');
    menu_list.classList.remove('show');
});