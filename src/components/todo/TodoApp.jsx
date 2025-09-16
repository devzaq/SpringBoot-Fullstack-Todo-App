import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import WelcomePage from "./WelcomePage";
import ErrorPage from "./ErrorPage";
import ListTodoPage from "./ListTodoPage";
import TodoDetails from "./TodoDetails";

function TodoApp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/welcome/:username" element={<WelcomePage />} />
          <Route path="/todos" element={<ListTodoPage />} />
          <Route path="/todo-details" element={<TodoDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default TodoApp;
