const AddUsers = () => {
  const formHandler = (event) => {
    event.preventDefault();

    let data = event.turget.elements;
    dispatch(addNewUser(passport, name, age));
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <div>
          <input type="text" name="passport" defaultValue="4444" />
        </div>
        <div>
          <input type="text" name="name" defaultValue="4444" />
        </div>
        <div>
          <input type="text" name="age" defaultValue="4444" />
        </div>
        <div>
          <button type="submit"> Add new user</button>
        </div>
      </form>
    </div>
  );
};

export default AddUsers;
