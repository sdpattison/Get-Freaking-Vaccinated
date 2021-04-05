import Main from './views/Main';
import About from './views/About';
import './App.css';
import {useEffect, useState} from 'react';
import {Router} from '@reach/router';
import MyContext from './MyContext';
import axios from 'axios';

function App() {
  const [state, setState] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [haveResults, setHaveResults] = useState(false);
  useEffect(()=>{
    setHaveResults(false);
  },[]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    setSearched(true);
    axios.get(`https://www.vaccinespotter.org/api/v0/states/${state}.json`)
      .then(res => {
        console.log(res.data.features);
        setResults(res.data.features.filter(result => result.properties.appointments_available === true && result.properties.city !== null));
        setHaveResults(true);
      })
      .catch(err => console.log(err));
  }
    const sortedResults = results;
    sortedResults.sort(function(a, b) {
      if(a.properties.city.toLowerCase() < b.properties.city.toLowerCase()) return -1;
      if(a.properties.city.toLowerCase() > b.properties.city.toLowerCase()) return 1;
      return 0;
    });
  console.log(sortedResults);
  return (
    <div className="App">
      <MyContext.Provider value={{state, setState, handleSubmit, results, setResults, sortedResults, searched, setSearched}}>
        <Router>
          <Main path="/" />
          <About path="about" />
        </Router>
      </MyContext.Provider>
    </div>
  );
}

export default App;
