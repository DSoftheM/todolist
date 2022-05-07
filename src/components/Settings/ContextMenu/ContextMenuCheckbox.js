import './ContextMenu.css';

export default function ContextMenuCheckbox(props) {

    function onContextMenuChange(event) {
        toggleEnablingContextMenu(event);
    }

    function toggleEnablingContextMenu(event) {
        const menuArea = document.querySelector('.right-click-area');
        const menu = document.querySelector('.right-click-menu');

        if (menuArea.oncontextmenu === null) {
            menuArea.oncontextmenu = e => contextMenuHangler(e);

            document.addEventListener('click', event => {
                if (event.button !== 2) {
                    menu.classList.remove('active');
                }
            });

            menu.addEventListener('click', event => {
                event.stopPropagation();
            });

            function contextMenuHangler(event) {
                event.preventDefault();
                menu.style.top = `${event.clientY}px`;
                menu.style.left = `${event.clientX}px`;
                menu.classList.add('active');
            }
        } else {
            menuArea.oncontextmenu = null;
        }

        document.querySelector('.right-click-menu__item').addEventListener('click', () => console.log(97))
    }

    return (
        <>
            <div className="settings__item">
                <input
                    type='checkbox' 
                    id="context" 
                    className="custom-checkbox"
                    onChange={(e) => onContextMenuChange(e)}
                ></input>
                <label htmlFor="context">Enable custom context menu</label>
            </div>
        </>
    )
};