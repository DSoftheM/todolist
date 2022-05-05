import './App.css';
import ContextMenu from './components/Settings/ContextMenu/ContextMenu';
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
          <ContextMenu/>
        </body>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
