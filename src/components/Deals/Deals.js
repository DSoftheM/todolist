import DealsItem from '../DealsItem.js/DealsItem';
import { DealNames } from '../TodoList';
import './Deals.css';

export default function Deals(props) {
    const {
        dealName, 
        deals, 
        setDeals, 
        doneDeals, 
        setDoneDeals
    } = props;

    // let localStorageDeals = localStorage.getItem('deals');

    // let currentDeals = localStorageDeals 
    //     ? localStorageDeals.split(',') 
    //     : [];
    let currentDeals = [];
    switch (dealName) {
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
            throw new Error('dealName ?');
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
                                    deleteFromState('deals', deal);
                                    addToDoneDealsState(deal);

                                    deleteFromLocalStorage('deals', deal);
                                    addToLocalStorage('doneDeals', deal);
                                } else if (animationName === Animations.delete) {

                                    if (dealName === DealNames.done) {
                                        deleteFromState('doneDeals', deal);
                                        deleteFromLocalStorage('doneDeals', deal);
                                    } else if (dealName === DealNames.uncompleted) {
                                        deleteFromState('deals', deal);
                                        deleteFromLocalStorage('deals', deal);
                                    }

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

                            function deleteFromState(state, element) {
                                switch (state) {
                                    case 'deals':
                                        const deals = [...currentDeals];
                                        deals.splice(deals.indexOf(element), 1);
                                        setDeals(deals);
                                        console.log(`${element} удалён из deals state`);
                                        break;
                                    case 'doneDeals':
                                        const doneDeals = [...currentDeals];
                                        doneDeals.splice(doneDeals.indexOf(element), 1);
                                        setDoneDeals(doneDeals);
                                        console.log(`${element} удалён из done deals state`);
                                        break;
                                    default:
                                        throw new Error('state ?');
                                }
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
                                        dealName={dealName}
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




