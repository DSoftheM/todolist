import './ContextMenu.css';
import {DealNames} from '../../TodoList';

export default function ContextMenuCheckbox(props) {

    const { 
        deals,
        setDeals,
        doneDeals,
        setDoneDeals,
        dealName,
    } = props;

    console.log(dealName, 'ContextMenuCheckbox');

    function onContextMenuChange(event) {
        toggleEnablingContextMenu(event);
    }

    function clearClass(className, elements) {
        elements.forEach(element => {
            element.classList.remove(className);
        });
    }

    function toggleEnablingContextMenu(event) {
        const menuArea = document.querySelector('.right-click-area');
        const menu = document.querySelector('.right-click-menu');
        menuArea.onmouseup = e => {
            const targetElement = document.elementFromPoint(e.x, e.y);
            const classList = Array.from(targetElement.classList);
            
            if (classList.includes('item-deals')) {
                const deals = document.querySelectorAll('.item-deals');
                clearClass('selected', deals);
                targetElement.classList.add('selected');
            }
        }

        if (menuArea.oncontextmenu === null) {
            menuArea.oncontextmenu = e => contextMenuHangler(e);

            document.addEventListener('click', event => {
                if (event.button !== 2) {
                    menu.classList.remove('active');
                }
            });

            menu.addEventListener('click', event => {
                // event.stopPropagation();
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

        const contextMenuBtns = document.querySelectorAll('.right-click-menu__item');
        contextMenuBtns.forEach(item => {
            item.addEventListener('click', (e) => contextButtonHandler(e))
        });
    }

    function contextButtonHandler(event) {
        const targetElement = document.querySelector('.selected');
        const text = targetElement.textContent;
        

        switch (event.target.id) {
            case "context-cut":
                onCutClick(text);
                break;
            case "context-copy":
                navigator.clipboard.writeText(text);
                break;
            case "context-paste":
                const bufferText =  navigator.clipboard.readText();
                targetElement.querySelector('.item-deals__txt').textContent = bufferText;
                break;
            default:
                break;
        }
    }

    function onCutClick(text) {
        updateState(text, dealName);
        updatedLocalStorage(text, dealName);
        navigator.clipboard.writeText(text);
    }

    function updateState(text, dealName) {
        const currentDeals = 
            dealName === DealNames.done 
                ? [...doneDeals]
                : [...deals];
        const index = currentDeals.indexOf(text);
        currentDeals[index] = '';
        dealName === DealNames.done 
            ? setDoneDeals([...currentDeals])
            : setDeals([...currentDeals]);
    }

    function updatedLocalStorage(text, dealName) {
        const localStorageDeals = localStorage.getItem(dealName);
        const updatedLocalStorageDeals = localStorageDeals.replace(text, '')
        localStorage.setItem(dealName, updatedLocalStorageDeals) ;
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