// Home.js
import { Outlet, useOutletContext } from "react-router-dom";
import UserCard from "../components/UserCard";

function Home() {
  // Get users from App via Outlet context
  const users = useOutletContext();

  const userList = users.map(user => <UserCard key={user.id} user={user} />);

  return (
    <main>
      <h1>Home!</h1>
      {/* Nested route (UserProfile) will render here */}
      <Outlet context={users} />
      {/* List of users */}
      {userList}
    </main>
  );
}

export default Home;
