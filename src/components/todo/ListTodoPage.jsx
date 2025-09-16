import { useState } from "react";
import TodoDetails from "./TodoDetails";

function ListTodoPage() {
  const today = new Date("2027", "01", "05");
  const [todos, setTodos] = useState([
    { id: 1, description: "Learn Aws", isDone: false, targetDate: today },
    { id: 2, description: "Learn Docker", isDone: false, targetDate: today },
    {
      id: 3,
      description: "Know about Mozilla",
      isDone: true,
      targetDate: today,
    },
    {
      id: 4,
      description: "Make cool todo app",
      isDone: false,
      targetDate: today,
    },
  ]);

  const handleIsDoneChange = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <h1>List of Todos</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Target Date</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(({ id, description, isDone, targetDate }) => (
              <TodoDetails
                key={id}
                id={id}
                description={description}
                isDone={isDone}
                handleIsDoneChange={handleIsDoneChange}
                targetDate={targetDate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListTodoPage;
