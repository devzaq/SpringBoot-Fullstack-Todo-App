function TodoDetails({
  id,
  description,
  isDone,
  handleIsDoneChange,
  targetDate,
}) {
  return (
    <tr>
      <td>{id}</td>
      <td>{description}</td>
      <td>{targetDate.toLocaleDateString("en-US")}</td>
      <td>
        <input
          onChange={() => handleIsDoneChange(id)}
          type="checkbox"
          checked={isDone}
        />
      </td>
    </tr>
  );
}

export default TodoDetails;
