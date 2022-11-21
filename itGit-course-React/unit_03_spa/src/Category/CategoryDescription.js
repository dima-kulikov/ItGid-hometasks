import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";

function CategoryDescription() {
    let {CatParams} = useParams();
    return(
        <>
        <Link to="/cat">Назад</Link>
        <h1>Category: {CatParams}</h1>
        </>
    );
}

export default CategoryDescription;