document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    burger.addEventListener('click', function () {
        menu.classList.toggle('open'); // Добавим класс "open" для открытия/закрытия меню
        menu.style.display = menu.classList.contains('open') ? 'block' : 'none'; // Управляем отображением меню
    });
});