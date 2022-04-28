import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <div className="wrapper">
        <header></header>
        <body>
          <div className='container'>
            <TodoList></TodoList>
          </div>
        </body>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
