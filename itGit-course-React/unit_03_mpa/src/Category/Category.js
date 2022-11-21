// import {useLocation} from 'react-router-dom';

function Category() {
    return(
        <>
        <h1>Category</h1>
       
        <ul>
            <li><a href="/cat/notebook">Ноутбуки</a></li>
            <li><a href="/cat/monitor">Мониторы</a></li>
            <li><a href="/cat/cellphone">Мобильные телефоны</a></li>
        </ul>
        </>
    );
}

export default Category;