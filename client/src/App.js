import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <> 
      <h1>My Todos</h1>
      <Todo text='learn to code'/>
      <Todo text='learn react'/>
      <Todo text='example of props'/>
      <Modal/>
      <Backdrop />
    </>
  );
}

export default App;
