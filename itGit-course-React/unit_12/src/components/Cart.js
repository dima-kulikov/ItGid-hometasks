

function Cart(props) {
    console.log(props.shop)
    return (
        <table width="70%" border="1" cellpadding="4" cellspacing="0">
        <caption>Товары которые Вы положили в корзину</caption>
        <tr>
         <th>Название</th><th>Цена</th><th>Количество</th><th>общ. сумма</th>
        </tr>
        {Object.keys(props.shop).map(item => <tr key={item + props.product[item]}><td>{props.product[item]['title']}</td><td>{props.product[item]['cost']}</td> <td>{props.shop[item]}</td></tr>)}
       </table>
    );
}

export default Cart;