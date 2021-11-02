
import './App.css';
import Child from  "./components/Child"


function App() {
  let arr = [ { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
       ];

  return (
    <div className="App">
      <header className="App-header">
        <Child arr={arr}/>
        
       
      </header>
    </div>
  );
}

export default App;
