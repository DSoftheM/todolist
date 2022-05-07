export default function ContextMenu(props) {
    function contextButtonHandler(event) {
        console.log(100);
        switch (event.target.id) {
            case "context-cut":
                console.log('cut');
                break;
            case "context-copy":
                console.log('copy');
                break;
            case "context-paste":
                console.log('paste');
                break;
            default:
                break;
        }
    }

    return (
        <>
            <ul className='right-click-menu' onClick={() => {console.log('click')}}>
                <li className='right-click-menu__item' id="context-cut" onClick={(e) => contextButtonHandler(e)}>Cut</li>
                <li className='right-click-menu__item' id="context-copy" onClick={(e) => contextButtonHandler(e)}>Copy</li>
                <li className='right-click-menu__item' id="context-paste" onClick={(e) => contextButtonHandler(e)}>Paste</li>
            </ul>
        </>
    );
}