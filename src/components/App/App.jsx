import { useEffect, useState } from 'react';
import axios from 'axios';


import Header from '../Header/Header.jsx'
import ItemToBuy from '../Item/Item'
import ItemList from '../ItemList/ItemList'
import ItemForm from '../ItemForm/ItemForm'
import './App.css';




function App() {
  const [shoppingList, setShoppingList] = useState([]);

  //onload, get lists

  useEffect(() => {
    fetchShoppingList();
  }, [])

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const handleClick = () => {

    console.log('not sure what goes here')
  };




  const fetchShoppingList = () => {
    // TODO: GET route
    axios.get('/api/shopping')
      .then((response) => {
        console.log(response.data);
        setShoppingList(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
    // TODO: fetch the list of people from the server
  }


  const addItemToBuy = (event) => {
    event.preventDefault();

    // TODO: POST route
    const newItemToBuy = {
      name: name,
      quantity: quantity,
      unit: unit
    }


    axios.post('/api/shopping', newItemToBuy)
      .then((response) => {
        console.log(response);

        setName('');
        setQuantity('');
        setUnit('')
          ;

        fetchShoppingList();
      })
      .catch((error) => {
        console.log(error);
      })
  }



  return (
    <div className="App">
      <Header />
      <main>
        <p>
          Our Shopping List</p>
        <div>here

        </div>
      </main>
      <ItemForm getItems={fetchShoppingList} />
      <ItemList tomato={shoppingList} />
      <div>Better Place</div>


      { }




    </div>
  );
}


export default App;
