import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { validar, user } = useContext(UserContext);

  useEffect(() => {
    validar();
  }, [validar]);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src="https://i.pinimg.com/236x/bd/1c/c7/bd1cc751865c67de695216da045579d5.jpg"
        alt=""
        style={{ borderRadius: "50%" }}
      />

      <h3>Email: {user}</h3>
      <button className="btn btn-secondary">cerrar sesion</button>
    </div>
  );
};
export default Profile;
