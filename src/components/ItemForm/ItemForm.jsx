import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

function ItemForm(props) {

    const getItems = props.getItems;
    if (!getItems) {
        console.log('MISSING REQUIRED PROPS!')
    }

    let [newItemName, setNewItemName] = useState('');
    let [newItemQuantity, setNewItemQuantity] = useState('0');
    let [newItemUnit, setNewItemUnit] = useState('0');


    const addItem = () => {
        console.log('addItem');
        axios.post('/api/shopping', { name: newItemName, quantity: newItemQuantity, unit: newItemUnit })
            .then(response => {
                console.log('here???')
                // clear inputs
                setNewItemName('');
                setNewItemQuantity('');
                setNewItemUnit('');

                // Refresh the list
                getItems();
            })
            .catch(err => {
                alert('Error Adding Item');
                console.log(err);
            })
    };

    // axios.get('/api/Item'), (req, res) => {
    //     console.log('GET hit');
    //     const queryText = 'SELECT * FROM "shopping";';

    //     pool.query
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('handleSubmit');
        if (newItemName) {
            addItem();
        }
        else {
            alert('The new Item needs a name!');
        }
    }

    return (
        <>
            <h2>Add a new Item</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                </label>
                <input
                    type="text"
                    placeholder="Name"
                    value={newItemName}
                    onChange={(evt) => setNewItemName(evt.target.value)}

                />
                <label>
                    Qty
                </label>
                <input
                    type="number"
                    placeholder="qty"
                    value={newItemQuantity}
                    onChange={(evt) => setNewItemQuantity(evt.target.value)}

                />
                <label>
                    Unit
                </label>
                <input
                    type="text"
                    placeholder="unit"
                    value={newItemUnit}
                    onChange={(evt) => setNewItemUnit(evt.target.value)}

                />

                <Button type="submit">Add Item</Button>
            </form>
        </>
    );
}


export default ItemForm;