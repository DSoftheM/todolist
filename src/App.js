import './App.css';
import TodoList from './components/TodoList';
import './context-menu';
import './context-menu.css';

function App() {
  return (
    <>
      <div className="wrapper">
        <header></header>
        <body className='right-click-area'>
          <div className='container'>
            <TodoList></TodoList>
          </div>
          <ul className='right-click-menu'>
            <li id='right-click-menu__1'>1</li>
            <li id='right-click-menu__2'>2</li>
            <li id='right-click-menu__3'>3</li>
          </ul>
          <script defer src='context-menu.js'></script>
        </body>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
