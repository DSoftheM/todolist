import DealsItem from '../DealsItem.js/DealsItem';
import './Deals.css';

export default function Deals() {
    return (
        <>
            <div className="deals">
                <div className="deals__header">Deals</div>
                <ul className='deals__items'>
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