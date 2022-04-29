import './TodoInput.css';

export default function TodoInput({deals, setDeals}) {
    
    let inputText = '';
    return (
        <div className="input">
            <input 
                className='input-field' 
                type="text" 
                placeholder="type your deal..."
                onChange={(e) => {
                    inputText = e.target.value;
                    console.log('inputText :>> ', inputText);
                }}
            ></input>
            <div 
                className="add"
                onClick={() => {
                    let input = document.querySelector('.input-field');
                    if (input.value) {
                        setDeals([...deals, inputText]);
                        input.value = '';
                    } else {
                        console.log('value is empty');
                    }
                }}
            
            >Add</div>
        </div>
    );
}