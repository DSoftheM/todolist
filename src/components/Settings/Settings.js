import DoneDealsCheckbox from './DoneDealsCheckbox/DoneDealsCheckbox';
import './Settings.css';

export default function Settings(props) {
    const {
        setDealName,
    } = props;

    

    return (
        <>
            <div className="settings">
                <div className="settings__items">
                    <DoneDealsCheckbox
                        setDealName={(name) => setDealName(name)}
                    />
                </div>
            </div>
        </>
    );
}