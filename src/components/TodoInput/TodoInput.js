import './TodoInput.css';

export default function TodoInput({deals, setDeals}) {

    function onAddClick(event) {
        let input = document.querySelector('.input-field');
        if (input.value) {

            
            setDeals([inputText, ...deals]);
            // localStorage.setItem('deals', [inputText, ...deals])
            let localStorageDeals = localStorage.getItem('deals');
            if (localStorageDeals) {
                localStorage.setItem('deals', [inputText, ...localStorageDeals.split(',')]);
            } else {
                localStorage.setItem('deals', inputText);
            }
            input.value = '';
        } else {
            throw new Error('value is empty');
        }
    }

    function onSettingsClick(event) {
        const settings = document.querySelector('.settings');
        settings.classList.toggle('hide');
        settings.classList.toggle('show');
    }
    
    let inputText = '';
    return (
        <div className="input">
            <input 
                className='input-field' 
                type="text" 
                placeholder="type your deal..."
                onChange={(e) => {
                    inputText = e.target.value;
                }}
            ></input>
            <div 
                className="add"
                onClick={(e) => onAddClick(e)}
            >Add</div>

            <div 
                className="settings-btn"
                onClick={(e) => onSettingsClick(e)}
            >Settings</div>
        </div>
    );
}