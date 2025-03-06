const Form = ({ onClick, onChangeName, onChangeEmail, valueName, valueEmail }) => {

  return (
    <form>
      <label>Name</label>
      <input type="text" placeholder="Name" value={valueName || ""} onChange={onChangeName} />
      <label>Email</label>
      <input type="email" placeholder="Email" value={valueEmail || ""} onChange={onChangeEmail} />
      <button type="button" onClick={onClick}>Add</button>
    </form>
  )
}

export default Form