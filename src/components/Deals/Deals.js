import DealsItem from '../DealsItem.js/DealsItem';
import './Deals.css';

export default function Deals({deals}) {
    return (
        <>
            <div className="deals">
                <div className="deals__header">Deals</div>
                <ul className='deals__items'>
                    {
                        deals.map(deal => {
                            return (
                                <li className='deals__li'>
                                    <DealsItem dealText={deal}/>
                                </li>
                            );
                        })
                    }
                    <li className='deals__li'>
                        <DealsItem/>
                    </li>
                    <li className='deals__li'>
                        <DealsItem/>
                    </li>
                    <li className='deals__li'>
                        <DealsItem/>
                    </li>
                </ul>
            </div>
        </>
    )
}