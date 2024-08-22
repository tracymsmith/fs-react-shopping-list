function ItemList(props) {

  const itemList = props.tomato;

  return (
    <>
      <h2>Shopping List</h2>
      {/* <div>{JSON.stringify(props)}</div> */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {itemList.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ItemList;