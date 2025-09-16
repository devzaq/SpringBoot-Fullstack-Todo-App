import { Link, useParams } from "react-router-dom";

function WelcomePage() {
  const { username } = useParams();
  return (
    <div>
      <h1>Welcome {username}!</h1>
      <Link type="button" to="/todos">
        Todos
      </Link>
    </div>
  );
}

export default WelcomePage;
