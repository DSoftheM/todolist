import './TodoInput.css';

export default function TodoInput() {
    return (
        <div className="input">
            <input className='input-field' type="text" placeholder="type your deal..."></input>
            <div className="add">Add</div>
        </div>
    );
}