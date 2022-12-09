import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectGoods} from '../store/goodsSlice';
import {selectCart} from '../store//cartSlice';
import Cart from '../components/Cart';
import {minus} from '../store/cartSlice';
import {deleteCart} from '../store/cartSlice';

function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    // переиндексирую массив товаров
    const dispatch = useDispatch();

    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {})
    // console.log(cart)

const clickHandler = (event) => {
    event.preventDefault();
    let btn = event.target;
    if(btn.classList.contains('minus')){
        // console.log(goodsObj)
    dispatch(minus(btn.getAttribute('data-key')))
    }else if(btn.classList.contains('delete')){
        dispatch(deleteCart(btn.getAttribute('data-key'), goodsObj))
        // console.log(goodsObj)
    }

    return true;
}

    return(
        <div onClick={clickHandler}>
       <Cart shop={cart}  product={goodsObj}/>
       </div>
    );
}
export default CartList;