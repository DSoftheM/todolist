import DealsItem from '../DealsItem.js/DealsItem';
import { DealNames } from '../TodoList';
import './Deals.css';

export default function Deals({dealsName, deals, setDeals, doneDeals, setDoneDeals}) {

    // let localStorageDeals = localStorage.getItem('deals');

    // let currentDeals = localStorageDeals 
    //     ? localStorageDeals.split(',') 
    //     : [];
    let currentDeals = [];
    switch (dealsName) {
        case DealNames.done:
            currentDeals = localStorage.getItem('doneDeals');
            if (currentDeals)
                currentDeals = currentDeals.split(',')
            break;
        case DealNames.uncompleted:
            currentDeals = localStorage.getItem('deals');
            if (currentDeals)
                currentDeals = currentDeals.split(',')
            break;
        default:
            throw new Error('dealsName ?');
    };
    currentDeals = currentDeals || [];




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
                                    deleteFromDealsState(deal);
                                    addToDoneDealsState(deal);

                                    deleteFromLocalStorage('deals', deal);
                                    addToLocalStorage('doneDeals', deal);
                                } else if (animationName === Animations.delete) {
                                    deleteFromDealsState(deal);
                                    deleteFromLocalStorage('deals', deal);
                                }
                            }

                            function addToDoneDealsState(element) {
                                setDoneDeals([element, ...doneDeals]);
                            }

                            function addToLocalStorage(key, element) {
                                let data = localStorage.getItem(key);
                                data = data ? data.split(',') : [];
                                localStorage.setItem(key, [element, ...data]);
                                console.log(`${element} добавлен в ${key}(localStorage)`);
                            }

                            function deleteFromDealsState(element) {
                                const updatedDeals = [...currentDeals];
                                updatedDeals.splice(updatedDeals.indexOf(element), 1);
                                setDeals(updatedDeals);
                                console.log(`${element} удалён из deals state`);
                            }

                            function deleteFromLocalStorage(key, element) {
                                const data = localStorage.getItem(key).split(',');
                                const index = data.indexOf(element);
                                data.splice(index, 1);
                                localStorage.setItem(key, data);
                                console.log(`${element} удалён из ${key}(localStorage)`);
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




