import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Userpage = () => {
  const { usersId } = useParams();
  const [users, setUsers] = useState([]); // Define state here
  const apiurl = `https://dummyjson.com/users/` + usersId;

  useEffect(() => {
    fetch(apiurl)
      .then(response => response.json())
      .then(data => setUsers(data));
  }, [apiurl]);

  return (
    <>
<div>

    <figure>
    <figure className="aspect-video w-40">
            <img src="https://robohash.org/bungtowe" alt="" />
          </figure>
    </figure>
      {users ? (
        <div className="card-body">
          <h2 className="card-title">Profile User</h2>
          <p className="">Nama: {users.firstName} {users.lastName}</p>
          <p> Umur: {users.age}</p>
          <p> Email: {users.email}</p>
          <p> Kelamin: {users.gender}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
</div>
      <div>
        <Link to={"/"} className="btn btn-primary">
          {'<---'} kembali
        </Link>
      </div>
    </>
  );
};

export default Userpage;
