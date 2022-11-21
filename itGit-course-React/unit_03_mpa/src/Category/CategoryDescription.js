import { useParams } from "react-router-dom";

function CategoryDescription() {
    let {CatParams} = useParams();
    return(
        <>
        <a href="/cat">Назад</a>
        <h1>Category: {CatParams}</h1>
        </>
    );
}

export default CategoryDescription;