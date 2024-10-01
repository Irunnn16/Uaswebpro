import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Profilepage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    const apiurl = 'https://dummyjson.com/users/'
      fetch (apiurl)
     .then(response => response.json())
     .then(data => setUsers(data.users));
  }, []);

  return (
    <>
    <h1 className="text-5xl text-bo flex justify-center items-center">Hallo User ini adalah </h1>
    <p className='text-bo flex justify-center items-center'>kumpulan Profile user</p>

    <div className="monsonry grid grid-cols-4 gap-3">
      {users.map(users => (
        <div className='card-mosonry-item bg-base-200 hover:scale-105' key={users.id}>
          <figure className="aspect-video w-full">
            <img src="https://robohash.org/bungtowe" alt="" />
          </figure>
          <div className="card-body"> 
            <h2 className="card-title">{users.firstName}</h2>
            {/* <p className="flex flex-col py-1 text-center text-xs">{users.email}</p> */}
            <p>{users.phone}</p>

            <div>
              <Link to={"/detail/" + users.id} className="btn btn-primary">Lihat Profil</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Profilepage
