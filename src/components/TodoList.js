import { useState } from "react";
import Deals from "./Deals/Deals";
import TodoInput from "./TodoInput/TodoInput";
import TodoListHeader from "./TodoListHeader/TodoListHeader";

function TodoList() {
    let [deals, setDeals] = useState(['need to buy sugar', 'remains in team', 'todo', 'remember path to shop']);
    let [doneDeals, setDoneDeals] = useState([]);

    return (
        <>
            <TodoListHeader
                dealsCount={deals.length}
            />
            <TodoInput 
                deals={deals} 
                setDeals={setDeals}
            />
            <Deals 
                deals={deals}
                setDeals={setDeals}
                doneDeals={doneDeals}
                setDoneDeals={setDoneDeals}
            />
        </>
    )
}

export default TodoList;