import { useState } from "react";
import Deals from "./Deals/Deals";
import Settings from "./Settings/Settings";
import TodoInput from "./TodoInput/TodoInput";
import TodoListHeader from "./TodoListHeader/TodoListHeader";

export default function TodoList() {
    // debugger
    const localStorageDeals = localStorage.getItem('deals');
    let initDeals = [];
    let dealsCount = 0;
    if (localStorageDeals) {
        initDeals = localStorageDeals.split(',');
        dealsCount = initDeals.length;
    }

    const localStorageDoneDeals = localStorage.getItem('doneDeals');
    let initDoneDeals = [];
    let doneDealsCount = 0;
    if (localStorageDoneDeals) {
        initDoneDeals = localStorageDoneDeals.split(',');
        doneDealsCount = initDoneDeals.length;
    }

    let [deals, setDeals] = useState([...initDeals]);
    let [doneDeals, setDoneDeals] = useState([...initDoneDeals]);

    let [dealName, setDealName] = useState(DealNames.uncompleted);

    let count = 0;
    switch (dealName) {
        case DealNames.done:
            count = doneDeals.length;
            break;
        case DealNames.uncompleted:
            count = deals.length;
            break;
        default:
            throw new Error('dealName ?');
    }

    return (
        <>
            <TodoListHeader
                count={count}
            />
            <TodoInput 
                deals={deals} 
                setDeals={setDeals}
            />
            <Settings
                setDealName={(name) => setDealName(name)}
            />
            <Deals 
                dealName={dealName}

                deals={deals}
                doneDeals={doneDeals}
                
                setDeals={setDeals}
                setDoneDeals={setDoneDeals}
            />
        </>
    )
}

export const DealNames = {
    done: "done",
    uncompleted: "uncompleted",
}