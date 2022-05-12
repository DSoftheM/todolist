import ContextMenuCheckbox from './ContextMenu/ContextMenuCheckbox';
import DoneDealsCheckbox from './DoneDealsCheckbox/DoneDealsCheckbox';
import './Settings.css';

export default function Settings(props) {
    const {
        setDealName,
        deals,
        setDeals,
        doneDeals,
        setDoneDeals,
        dealName,
    } = props;

    

    return (
        <>
            <div className="settings show">
                <div className="settings__items">
                    <DoneDealsCheckbox
                        setDealName={(name) => setDealName(name)}
                    />
                    <ContextMenuCheckbox
                        deals={deals}
                        doneDeals={doneDeals}
                        
                        setDeals={(deals) => setDeals(deals)}
                        setDoneDeals={(deals) => setDoneDeals(deals)}

                        dealName={dealName}
                    />
                </div>
            </div>
        </>
    );
}