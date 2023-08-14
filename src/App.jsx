// style
import "./App.css";

import { useState } from "react";
// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userlist/UserList";
import NewUserForm from "./components/newuser/NewUserForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([
    {
      age: "16",
      firstName: "Usmonov",
      from: "Fergana",
      gender: "male",
      id: "1b2796ad-1051-4c68-826c-29fb022c279e",
      image:
        "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?t=st=1692001804~exp=1692002404~hmac=77f5f9a1383973e3810f4dac51d41add3e595a4c37280c353dcadcd248a715da",
      job: "Frond-end developer",
      lastName: "Maqsadbek",
    },
    {
      age: "16",
      firstName: "Mr Remes",
      from: "Germany",
      gender: "male",
      id: "1b2796ad-1051-4c98-136c-12fb002a279e",
      image: "https://randomuser.me/api/portraits/men/60.jpg",
      job: "Back-end developer",
      lastName: "Bauer",
    },
    {
      age: "16",
      firstName: "Mr Josh",
      from: "USA",
      gender: "male",
      id: "1b2796ad-1051-4c98-136c-12fb002a279e",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      job: "Full stack developer",
      lastName: "Bauer",
    },
    {
      age: "16",
      firstName: "Ms Hanna",
      from: "Germany",
      gender: "female",
      id: "1b2796ad-1051-4c98-136c-12fb002a279e",
      image: "https://randomuser.me/api/portraits/women/60.jpg",
      job: "Frond-end developer",
      lastName: "Bauer",
    },
  ]);
  console.log(users);

  // delete user
  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };

  // add user
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowModal(false);
  };

  // close modal
  const closeModal = (e) => {
    if (e.target.classList.value === "overlay") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        {!users.length && (
          <div className="no-users">
            <h2>No users</h2>
          </div>
        )}
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      <Footer />
      {showModal && <NewUserForm addUser={addUser} />}
      <button onClick={() => setShowModal(true)} className="create-user">
        Create User
      </button>
    </div>
  );
}

export default App;
