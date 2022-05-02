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
            console.log('value is empty');
        }
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
        </div>
    );
}