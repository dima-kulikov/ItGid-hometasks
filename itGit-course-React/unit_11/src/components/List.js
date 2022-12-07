function List(data) {
  return (
    <div>
      <ul>
        {data.user.map((item) => (
          <li key={item.passport}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
