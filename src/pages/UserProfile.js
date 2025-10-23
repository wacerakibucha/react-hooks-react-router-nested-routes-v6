// UserProfile.js
import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  // Get users array from the parent Outlet context
  const users = useOutletContext();
  const { id } = useParams();

  // Find the specific user based on the URL parameter
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <aside>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      {/* Add more user details here if needed */}
    </aside>
  );
}

export default UserProfile;
