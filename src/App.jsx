import { useState } from 'react'
import Map from "./pages/Map";
import List from "./pages/List";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'
import { useEffect } from 'react'
//import source_seismes from './source_seismes.json'
import Footer from './components/Footer';
import Header from './components/Header';
function App() {

  const [page, setPage] = useState("map");
  const [seismes, setSeismes] = useState(null);
  useEffect(() => {
    fetch('https://isenapi.koality.pw/api/seismes/100')
      .then(res => res.json())
      .then(json => setSeismes(json))
      .catch(error => console.error(error));
  }, []);


  const link = (page) => {
    window.location.href = "#";
    setPage(page);
  };
  if(page === 'map'){
    return (
        <Map source={seismes} link={link}></Map>
    );
  } else if(page === 'list'){
    return (
      <div>
        <Header />
        <List source={seismes} link={link}></List>
        <Footer />
      </div>
    );
}
}
export default App
