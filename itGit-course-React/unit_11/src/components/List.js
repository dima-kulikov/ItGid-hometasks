function List(data) {
  return (
    <div>
      <ul>
        {data.users.map((item) => (
          <li key={item.passport}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
