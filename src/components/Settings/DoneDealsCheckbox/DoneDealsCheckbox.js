import { DealNames } from '../../TodoList';
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
        setDealName(isChecked ? DealNames.done : DealNames.uncompleted);
        


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
    
}

function addAnimationNameToUl() {
    const ul = document.querySelector('ul');

    switch (ul.style.animationName) {
        case Animations.ul.appearance:
            ul.style.animationName = Animations.ul.reverse;
            break;
        case Animations.ul.reverse:
            ul.style.animationName = Animations.ul.appearance;
            break;
        default:
            throw new Error(`animationName = ${ul.style.animationName} is invalid`);
    }
}

const Animations = {
    ul: {
        appearance: 'ul-appearance',
        reverse: 'ul-appearance-reverse',
    }
}