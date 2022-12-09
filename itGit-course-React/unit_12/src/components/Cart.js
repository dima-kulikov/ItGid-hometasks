

function Cart(props) {

  let allPrice = Object.keys(props.shop).reduce((accum, item) => {
    accum += props.shop[item] * props.product[item]['cost']
    return accum;
}, 0);

// console.log(props.shop) 


    if (Object.keys(props.shop).length === 0) {
        return true;
    }

    return (
      
        <>
        <table width="65%" border="1" cellPadding="4" cellSpacing="0">
        <caption>Товары которые Вы положили в корзину</caption>
        <thead>
        <tr>
         <th>Название</th><th>Цена</th><th>Количество</th><th>общ. сумма</th><th></th>
        </tr>
        
        {Object.keys(props.shop).map(item => <tr key={item + props.product[item]}>
            <td>{props.product[item]['title']}</td>
            <td>{props.product[item]['cost']}</td>
            <td>{props.shop[item]}</td>
            <td>{props.shop[item] * props.product[item]['cost']}</td> 
            <td style={{width:'15%'}}>
                <button data-key={props.product[item]['articul']} className="btnMinus tableBtn minus">minus</button>
                <button data-key={props.product[item]['articul']} className="btnDelete tableBtn delete">delete</button>
            </td>
            </tr>)}
            <tr>
            <td colSpan="4"> Общая сумма заказа:</td><td>{allPrice}</td>
            </tr>
            </thead>
       </table>
       </>
    );
}

export default Cart;