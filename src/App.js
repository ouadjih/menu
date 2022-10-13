import { useState,useEffect } from "react";
import "./App.css";
import Card from "./component/Card";
import data from "./data";

const allCategories = data.map((item) => item.category);
const uniqueCategories = [...new Set(allCategories)]

console.log(uniqueCategories)

function App() {
  const [menuFood, setMenuFood] = useState(data);
  const[categorie,setCategories] =useState([])


  function toggleType(type){
    setCategories(type)
    console.log(type)
  }

  function filterFood(category){
    if(category === 'all') {
      setMenuFood(data)
      return;
    }
    const newData = data.filter((food) => food.category === category) 
    setMenuFood(newData)
  }



  return (
    <div className="App">
      <h1 className="menu">Our Menu</h1>
      <div className="ligne"></div>
      <ul className="type">
        <li onClick={()=>filterFood('all')}> All </li>
        {uniqueCategories.map(c =>
            <li key={c} onClick={()=>filterFood(c)}> {c} </li>
          )}
      </ul>

      <div className="container">
        {menuFood.map((food) => (
          <Card
          key={food.id}
          title={food.title}
          categorie={food.category}
          price={food.price}
          img={food.img}
          desc={food.desc}/>
          
        )
        )
}
          
        
      </div>
    </div>
  );
}

export default App;
