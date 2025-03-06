const Form = ({ onClick, onChange, valueName, valueEmail }) => {

  return (
    <form onSubmit={onClick}>
      <label>Name</label>
      <input type="text" placeholder="Name" value={valueName} onChange={onChange} />
      <label>Email</label>
      <input type="email" placeholder="Email" value={valueEmail} onChange={onChange} />
      <button type="submit">Add</button>
    </form>
  )
}

export default Form