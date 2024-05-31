import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import image from './assets/notepad.png'

function App() {
  return (
    <div className="App">
    <div className='box'></div>
    <div className='heading-container'>
      <img src={image} alt='/'></img>
      <p className='roboto-heading'>Todo App</p>
    </div>
    <AddTodo/>
    <Todos/>
    
    </div>
  );
}

export default App;
