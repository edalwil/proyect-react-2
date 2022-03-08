import './App.css';
import Card from './components/Card';
import { useState, useEffect } from "react";
import Loading from './components/Loading';



function App() {

  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, []);
  

  

  return (
    <div className="App">
      {isloading ? <Loading/> : <Card/> }
      
        
    </div>
  );
}

export default App;
