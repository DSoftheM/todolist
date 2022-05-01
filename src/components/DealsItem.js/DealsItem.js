import "./DealsItem.css";
import trashImgPath from "../../img/trash-bin.png";

export default function DealsItem({dealText = '', isDone = false, index = -1, doneDeals, setDoneDeals, deals, setDeals}) {

    
    function onDoneClick() {
        const ul = document.querySelector('.deals__items'); 
        const thisLi = Array.from(ul.childNodes).filter(x => x.textContent === dealText)[0];

        console.log('ссылка на list ul :>> ', ul);
        index = getIndex(ul, thisLi);
        
        setDoneDeals([...doneDeals, dealText]);

        updateLocalStorage();

        // const updatedDeals = [...deals];
        // updatedDeals.splice(updatedDeals.indexOf(dealText), 1);
        // setDeals(updatedDeals);

        addClassesDoneAndRemove(index);
    }

    function updateLocalStorage() {
        let currentStorageDeals = localStorage.getItem('deals').split(',');
        let indexOfStorage = currentStorageDeals.indexOf(dealText);
        let updatedStorageDeals = [...currentStorageDeals];
        updatedStorageDeals.splice(indexOfStorage, 1);
        localStorage.setItem('deals', updatedStorageDeals);
    }

    return (
        <>
            <div className={`deals__item item-deals ${isDone ? "done" : ""}`} >
                <div className="item-deals__txt">{dealText}</div>
                <div className="item-deals__group group-btns">
                    <div className="group-btns__done" onClick={() => onDoneClick()}>
                        <div className="check-mark"></div>
                    </div>
                    <div className="group-btns__remove">
                        <div className="trash">
                            <img className="trash__img" src={trashImgPath} alt="trash"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function getIndex(parent, child) {
    console.log('parent :>> ', parent);
    console.log('child :>> ', child);
    return [...parent.children].indexOf(child);
}



function addClassesDoneAndRemove(index) {
    document.querySelectorAll('.deals__li')[index].classList.add('done', 'remove');
}


// const arr = ["1", '2', '3'];

// arr.splice(arr.indexOf('3'), 1);
// console.log(arr);
