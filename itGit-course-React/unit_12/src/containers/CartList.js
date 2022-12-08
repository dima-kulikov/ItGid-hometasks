import React from 'react';
import {useSelector} from 'react-redux';
import {selectGoods} from '../store/goodsSlice';
import {selectCart} from '../store//cartSlice';
import Cart from '../components/Cart';

function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    // переиндексирую массив товаров

    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {})
    // console.log(cart)



    return(
       <Cart shop={cart}  product={goodsObj}/>
        // <div>
        //     <ul>
        //         {Object.keys(cart).map(item => <li key={item + goodsObj[item]}>{goodsObj[item]['title']} - {cart[item]}</li>)}
        //     </ul>
        // </div>




    );
}
<tr>
         <td>Нефть</td><td>43</td><td>51</td><td>79</td>
        </tr>
export default CartList;