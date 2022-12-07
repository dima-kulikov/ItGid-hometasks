import { useDispatch } from "react-redux";
import { addNewUsers } from "../action";

const AddUsers = () => {
  const dispatch = useDispatch();

  const formHandler = (event) => {
    event.preventDefault();
    let data = event.target.elements;
    console.log(event.target.elements);

    dispatch(addNewUsers(data.passport.value, data.name.value, data.age.value));
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <div>
          <input type="text" name="passport" defaultValue="password" />
        </div>
        <div>
          <input type="text" name="name" defaultValue="name" />
        </div>
        <div>
          <input type="text" name="age" defaultValue="age" />
        </div>
        <div>
          <button type="submit"> Add new user</button>
        </div>
      </form>
    </div>
  );
};

export default AddUsers;
