import { useState } from "react";
import Deals from "./Deals/Deals";
import TodoInput from "./TodoInput/TodoInput";
import TodoListHeader from "./TodoListHeader/TodoListHeader";

function TodoList() {
    let [deals, setDeals] = useState([]);

    //test
    // deals = ['need to buy sugar', 'remains in team'];

    return (
        <>
             <TodoListHeader
                dealsCount={deals.length}
            />
            <TodoInput deals={deals} setDeals={setDeals}/>
            <Deals deals={deals}/>
        </>
    )
}

export default TodoList;