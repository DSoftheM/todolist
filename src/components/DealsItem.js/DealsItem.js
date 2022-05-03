import "./DealsItem.css";
import trashImgPath from "../../img/trash-bin.png";
import { DealNames } from "../TodoList";

export default function DealsItem(props) {
    // let 
    const {
        dealName,
        dealText = 'empty',
        isDone = false,
        doneDeals,
        setDoneDeals,
        deals,
        setDeals,
        // onTrashBinClick,
    } = props;
    
    function onDoneClick() {
        const ul = document.querySelector('.deals__items'); 
        const thisLi = Array.from(ul.childNodes).filter(x => x.textContent === dealText)[0];
        const index = getIndex(ul, thisLi);
        
        // setDoneDeals([...doneDeals, dealText]);



        // updateLocalStorage();

        // const updatedDeals = [...deals];
        // updatedDeals.splice(updatedDeals.indexOf(dealText), 1);
        // setDeals(updatedDeals);

        addClassesDoneAndRemove(index);
    }

    function updateLocalStorage() {
        let currentStorageDeals = localStorage.getItem('deals').split(',');
        let indexInStorage = currentStorageDeals.indexOf(dealText);
        let updatedStorageDeals = [...currentStorageDeals];
        updatedStorageDeals.splice(indexInStorage, 1);
        localStorage.setItem('deals', updatedStorageDeals);
    }

    function onTrashBinClick(event) {
        const ul = document.querySelector('.deals__items'); 
        const thisLi = Array.from(ul.childNodes).filter(x => x.textContent === dealText)[0];
        thisLi.classList.add('deleted', 'remove-reversed');
        // updateLocalStorage();
    }

    return (
        <>
            <div className={`deals__item item-deals ${isDone ? "done" : ""}`} >
                <div className="item-deals__txt">{dealText}</div>
                    <div className="item-deals__group group-btns">
                        {
                            dealName === DealNames.uncompleted &&
                                <div className="group-btns__done" onClick={() => onDoneClick()}>
                                    <div className="check-mark"></div>
                                </div>
                        }
                        <div className="group-btns__remove">
                            <div className="trash">
                                <img 
                                    className="trash__img" 
                                    src={trashImgPath} 
                                    alt="trash"
                                    onClick={(e) => onTrashBinClick(e)}
                                ></img>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

function getIndex(parent, child) {
    return [...parent.children].indexOf(child);
}
function addClassesDoneAndRemove(index) {
    document.querySelectorAll('.deals__li')[index].classList.add('done', 'remove');
}


// const arr = ["1", '2', '3'];

// arr.splice(arr.indexOf('3'), 1);
// console.log(arr);
