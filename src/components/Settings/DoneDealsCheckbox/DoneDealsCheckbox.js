import './DoneDealsCheckbox.css';

export default function DoneDealsCheckbox(props) {

    const {
        setDealName
    } = props;

    function onDoneChange(e) {
        // add to local storage
        const isChecked = e.target.checked;
        localStorage.setItem('isChecked', isChecked);

        // bring to up status
        setDealName(isChecked ? 'done' : 'uncompleted');


        //
    }

    return (
        <>
            <div className="settings__item">
                <input
                    type='checkbox' 
                    id="done-deals" 
                    className="custom-checkbox"
                    onChange={(e) => onDoneChange(e)}
                ></input>
                <label htmlFor="done-deals">Done deals</label>
            </div>
        </>
    )
}