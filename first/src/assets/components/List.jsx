const List = ({ user, onclick }) => {
  return (
    <ul>
      {user.map((item) => (
        <li key={item.email}>
          {item.name} - {item.email}
          <button onClick={() => onclick(item.name)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default List