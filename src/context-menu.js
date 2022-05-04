window.onload = () => {
    const menuArea = document.querySelector('.right-click-area');
    const menu = document.querySelector('.right-click-menu');
    menuArea.addEventListener('contextmenu', event => {
        // event.preventDefault();
    });
}