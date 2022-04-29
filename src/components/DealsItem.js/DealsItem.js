import "./DealsItem.css";
import trashImgPath from "../../img/trash-bin.png";

export default function DealsItem({dealText}) {
    return (
        <>
            <div className="deals__item item-deals">
                <div className="item-deals__txt">{dealText}</div>
                <div className="item-deals__group group-btns">
                    <div className="group-btns__add">
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
    )
}