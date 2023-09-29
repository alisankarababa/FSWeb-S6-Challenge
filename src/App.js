import React, {useState, useEffect} from 'react';

import axios from "axios"

import Karakter from "./components/Karakter"
import Search from './components/Search';
import PageNumbers from './components/PageNumbers';

const urlCharacters = "https://swapi.dev/api/people/?page=2";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
    const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    useEffect(() => {
        axios.get(urlCharacters)
        .then(function (response) {
            setCharacters(response.data);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            console.log("App: get characters complete");
        });
    }, [])

    useEffect(() => {

    }, [])

    const [searchCriteria, setSearchCriteria] = useState("");


    function hSearchCriteria(e)
    {
        setSearchCriteria(e.target.value);
    }


    // function setUpData(data)
    // {
    //     if(0 === data.length)
    //         return [];

    //     return data.map((datum) => {

    //         for(const key in datum)
    //         {
    //             if(key === )
    //         }


    //     })
        
        
    // }



  return (
    <div className="App w-25 m-auto">
        <h1 className="Header">Karakterler</h1>
        <Search searchCriteria={searchCriteria} hSearchCriteria ={hSearchCriteria}/>
        {
            characters && characters.filter(( char ) => ( char.name.toLowerCase().includes(searchCriteria.toLowerCase()) )).map((character, idx) => <Karakter key={idx} character={character} />)
        }
        {/* <PageNumbers/> */}
    </div>
  );
}

export default App;
