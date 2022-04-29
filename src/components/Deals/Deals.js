import DealsItem from '../DealsItem.js/DealsItem';
import './Deals.css';

export default function Deals({deals}) {
    return (
        <>
            <div className="deals">
                <div className="deals__header">Deals</div>
                <ul className='deals__items'>
                    {
                        deals.map((deal, index) => {
                            return (
                                <li 
                                key={getHashCode(deal) + index.toString()}
                                className='deals__li'>
                                    <DealsItem 
                                        dealText={deal}
                                        isDone={false}
                                        index={index}
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


