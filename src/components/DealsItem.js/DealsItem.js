import "./DealsItem.css";
import trashImgPath from "../../img/trash-bin.png";

export default function DealsItem({dealText = '', isDone = false, index = -1}) {
    

    return (
        <>
            <div className={`deals__item item-deals ${isDone ? "done" : ""}`} onAnimationEnd={(e) => deleteDeal(e)}>
                <div className="item-deals__txt">{dealText}</div>
                <div className="item-deals__group group-btns">
                    <div className="group-btns__add" onClick={() => addClassDoneAndRemove(index)}>
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

function addClassDoneAndRemove(index) {
    document.querySelectorAll('.item-deals')[index].classList.add('done');
    document.querySelectorAll('.item-deals')[index].classList.add('remove');
}

function deleteDeal(event) {
    event.target.style.display = 'none';
}