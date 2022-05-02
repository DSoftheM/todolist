import DealsItem from '../DealsItem.js/DealsItem';
import { DealNames } from '../TodoList';
import './Deals.css';

export default function Deals({dealsName, deals, setDeals, doneDeals, setDoneDeals}) {

    let localStorageDeals = localStorage.getItem('deals');

    let currentDeals = localStorageDeals 
        ? localStorageDeals.split(',') 
        : [];
    // switch (dealsName) {
    //     case DealNames.done:
    //         currentDeals = [...doneDeals];
    //         break;
    //     case DealNames.uncompleted:
    //         currentDeals = [...deals];
    //         break;
    //     default:
    //         throw new Error('dealsName ?');
    // };




    return (
        <>
            <div className="deals">
                <div className="deals__header">Deals</div>
                <ul className='deals__items'>
                    {
                        currentDeals.map((deal, index) => {
                            const uniqueKey = getHashCode(deal) + index.toString();

                            function deleteDeal(animationEvent) {
                                const animationName = animationEvent.nativeEvent.animationName;
                                if (animationName === Animations.addToDone) {
                                    deleteFromState(deal);
                                    deleteFromLocalStorage(deal);
                                    addToDoneDealsState(deal);
                                } else if (animationName === Animations.delete) {
                                    deleteFromState(deal);
                                    deleteFromLocalStorage(deal);
                                }
                            }

                            function addToDoneDealsState(element) {
                                localStorage.setItem('doneDeals', element);
                                console.log(`${element} добавлен в doneDeals state`);
                            }

                            function deleteFromState(element) {
                                const updatedDeals = [...currentDeals];
                                updatedDeals.splice(updatedDeals.indexOf(element), 1);
                                setDeals(updatedDeals);
                                console.log(`${element} удалён из deals state`);
                            }

                            function deleteFromLocalStorage(element) {
                                const data = localStorage.getItem('deals').split(',');
                                const index = data.indexOf(element);
                                data.splice(index, 1);
                                localStorage.setItem('deals', data);
                                console.log(`${element} удалён из deleteFromLocalStorage`);
                            }

                            return (
                                <li 
                                    key={uniqueKey}
                                    className={`deals__li ${uniqueKey}`}
                                    onAnimationEnd={(e) => deleteDeal(e)}
                                >
                                    <DealsItem
                                        dealText={deal}
                                        isDone={false}
                                        doneDeals={doneDeals}
                                        setDoneDeals={setDoneDeals}
                                        deals={currentDeals}
                                        setDeals={setDeals}
                                        // onTrashBinClick={(element) => deleteDeal(element)}
                                    />
                                </li>
                            );
                        })
                    }
                    {/* <li className='deals__li'>
                        <DealsItem/>
                    </li>
                    <li className='deals__li'>
                        <DealsItem/>
                    </li>
                    <li className='deals__li'>
                        <DealsItem/>
                    </li> */}
                </ul>
            </div>
        </>
    )
}

function getHashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        let character = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+character;
        hash = hash & hash;
    }
    return hash;
}

const Animations = {
    addToDone: 'remove',
    delete: 'remove-reversed',
}




