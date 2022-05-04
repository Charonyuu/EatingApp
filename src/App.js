import './App.css';
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
    fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=25.0338,121.5646&radius=50&language=zh-TW&key=AIzaSyCSdLYqr2bb7rbq_4XEr4_c-61xBcOQ4CY')
    .then(res => console.log(res))
   }, []);
  
  
  return (
    <div>
    </div>
  );
}

export default App;
