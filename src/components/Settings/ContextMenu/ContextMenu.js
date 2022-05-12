export default function ContextMenu(props) {
    return (
        <>
            <ul className='right-click-menu'>
                <li className='right-click-menu__item' id="context-cut">Cut</li>
                <li className='right-click-menu__item' id="context-copy">Copy</li>
                <li className='right-click-menu__item' id="context-paste">Paste</li>
            </ul>
        </>
    );
}