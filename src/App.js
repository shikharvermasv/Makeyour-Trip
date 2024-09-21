import React , {useState} from "react";
import data from './data';
import Tour from "./components/Tour";


const App = () => {

  const [tour , setTour] = useState(data);

  function removeCard(id){
    const newTours = tour.filter(tour => tour.id !== id);
    setTour(newTours);
  };




  if(tour.length === 0){
    return (
      <div className="refresh">
        <h2>No Places Left</h2>

        <button  className="btn-white" onClick={()=>setTour(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className="app">
    <Tour tours = {tour} removeCard={removeCard}></Tour>  
    </div>
  )
};

export default App;