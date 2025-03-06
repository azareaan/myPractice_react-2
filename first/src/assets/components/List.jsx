const List = ({ user, onclick }) => {
  return (
    <ul>
      {user.map((item) => (
        <li key={item.id}>
          {item.name} - {item.email}
          <button onClick={() => onclick(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default List