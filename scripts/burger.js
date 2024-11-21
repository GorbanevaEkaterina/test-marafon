document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    burger.addEventListener('click', function () {
        burger.classList.toggle('open');

        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
            setTimeout(() => {
                menu.style.display = 'none';
            }, 300);
        } else {
            menu.style.display = 'block';
            setTimeout(() => {
                menu.classList.add('open');
            }, 10);
        }
    });
});