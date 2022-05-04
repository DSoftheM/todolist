import { dblClick } from '@testing-library/user-event/dist/click';
import './DoneDealsCheckbox.css';

export default function DoneDealsCheckbox(props) {

    const {
        setDealName,
    } = props;
    function onDoneChange(e) {
        // add to local storage
        const isChecked = e.target.checked;
        localStorage.setItem('isChecked', isChecked);

        // bring to up status
        setDealName(isChecked ? 'done' : 'uncompleted');


        // animations
        addAnimationNameToUl();
        addAnimationNameToDealsCount();
        
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

function addAnimationNameToDealsCount() {
    const dealsCount = document.querySelector('.header-todolist__deals span');
    console.log(dealsCount.textContent);
}

function addAnimationNameToUl() {
    const ul = document.querySelector('.deals__items');
    if (ul.style.animationName === 'ul-appearance') {
        ul.style.animationName = 'ul-appearance-reverse';
    } else if (ul.style.animationName === 'ul-appearance-reverse') {
        ul.style.animationName = 'ul-appearance'
    }
}