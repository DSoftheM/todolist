import DealsItem from '../DealsItem.js/DealsItem';
import { DealNames } from '../TodoList';
import './Deals.css';

export default function Deals({dealsName, deals, setDeals, doneDeals, setDoneDeals}) {

    let currentDeals = [];
    switch (dealsName) {
        case DealNames.done:
            currentDeals = [...doneDeals];
            break;
        case DealNames.uncompleted:
            currentDeals = [...deals];
            break;
        default:
            throw new Error('dealsName ?');
    };

    // currentDeals.reverse();



    return (
        <>
            <div className="deals">
                <div className="deals__header">Deals</div>
                <ul className='deals__items'>
                    {
                        currentDeals.map((deal, index) => {
                            const uniqueKey = getHashCode(deal) + index.toString();

                            function deleteDeal(event) {
                                const updatedDeals = [...currentDeals];
                                updatedDeals.splice(updatedDeals.indexOf(deal), 1);
                                setDeals(updatedDeals);
                                console.log('setDeals(updatedDeals)');
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
                                        index={index}
                                        doneDeals={doneDeals}
                                        setDoneDeals={setDoneDeals}
                                        deals={currentDeals}
                                        setDeals={setDeals}
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




