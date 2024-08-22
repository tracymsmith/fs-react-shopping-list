import { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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
            <Box
                component="form"
                onSubmit={handleSubmit}  // Connect handleSubmit to form
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    label="Item Name"
                    color="secondary"
                    focused
                    value={newItemName}
                    onChange={(evt) => setNewItemName(evt.target.value)}
                />
                <TextField
                    label="Quantity"
                    variant="filled"
                    color="success"
                    focused
                    type="number"
                    value={newItemQuantity}
                    onChange={(evt) => setNewItemQuantity(evt.target.value)}
                />
                <TextField
                    label="Unit"
                    variant="standard"
                    color="warning"
                    focused
                    value={newItemUnit}
                    onChange={(evt) => setNewItemUnit(evt.target.value)}
                />
                <button type="submit">Add Item</button>
            </Box>
        </>
    );
}


export default ItemForm;
