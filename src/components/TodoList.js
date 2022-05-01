import { useState } from "react";
import Deals from "./Deals/Deals";
import TodoInput from "./TodoInput/TodoInput";
import TodoListHeader from "./TodoListHeader/TodoListHeader";

function TodoList() {
    let [deals, setDeals] = useState(['need to buy sugar', 'remains in team', 'todo', 'remember path to shop']);
    let [doneDeals, setDoneDeals] = useState(['done1', 'done2']);

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
                dealsName={DealNames.uncompleted}
                deals={deals}
                setDeals={setDeals}
                doneDeals={doneDeals}
                setDoneDeals={setDoneDeals}
            />
        </>
    )
}

export const DealNames = {
    done: "done",
    uncompleted: "uncompleted",
}

export default TodoList;