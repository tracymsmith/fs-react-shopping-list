function ItemToBuy (props) {
    const itemToBuy = props.itemToBuy;

    return(
 <>
 <h2>Shopping List</h2>
    <div>
        Name: {props.name}
    </div>
    <div>
        Quantity: {props.quantity}
    </div>
    <div>
        Unit: {props.unit}
    </div>
</>  
)}

   
   
    
    
    export default ItemToBuy;
    
    // function DinnerSupplies(props) {
    //     const guestList = props.guestList;
    
    //     return(
            
    // <>
    // <h2>Dinner Supplies</h2>
    //       <div>
    //         Spoons: {guestList.length * 2}
    //       </div>
    //       <div>
    //         Forks: {guestList.length * 2}
    //       </div>
    //       <div>
    //         Knives: {guestList.length * 2}
    //       </div>
    
    
    // </>
    //     )
    // }
    
    // export default DinnerSupplies;