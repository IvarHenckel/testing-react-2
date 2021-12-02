import Todo from './components/Todo'

function App() { 
  /*This function will be used as a react component
  A component must return something that can be rendered in the browser to be useful.
  This is returned and inserted in the root div in index.js.*/
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Eat mustard'/>
    </div>
  );
  //Note the 'className' above. In HTML it's actually class, but since class is a keyword in JS
  //instead we use className in JSX. This is an example where html and JSX is not the same, but these cases are very rare.
    //class actually worked for me though...
} 

export default App; // export -> makes it available outside of this file
