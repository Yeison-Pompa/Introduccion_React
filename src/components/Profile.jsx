import React from "react";

const Profile = () => {
  return (
    <>
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="alumno@67desafiolatam.com"
          />
        
        </div>
        
     
        <button type="submit" className="btn btn-primary">
       Cerrar sesión
        </button>
      </form>
      </div>
    </>
  );
};

export default Profile;
