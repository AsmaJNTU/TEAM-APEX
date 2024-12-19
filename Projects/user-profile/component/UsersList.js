// import React from 'react';
// import HomeStyles from '../app/page.module.css'


// const UsersList=({users})=>{
//     return (
//         <div>
//             <main className={HomeStyles.main}>
//               <div className={HomeStyles.grid}>
//               {users?.map(user => (
//     <div className="card">
//         <p>Name : {user.name}</p>
//         <p>Email : {user.email}</p>
//         <p>Company : {user.company.name}</p>
//     </div>
// ))}

//               </div>
//             </main>
//         </div>
//     )
// }


// export default UsersList


"use client";
import React, { useEffect, useState } from "react";
import "../app/globals.css"; // Adjust the path as needed

const UsersList = () => {
  const [users, setUsers] = useState([]); // State to store user data
  const [loading, setLoading] = useState(true); // Loading indicator

  useEffect(() => {
    // Fetch data from the JSONPlaceholder API
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data); // Set fetched data to state
        setLoading(false); // Turn off loading
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Turn off loading on error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page">
      <main className="main">
        <h2>User List</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid">
            {users.map((user) => (
              <div key={user.id} className="card">
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Company:</strong> {user.company.name}
                </p><br/>
                <a href={`user/${user.id}`}>know more</a>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default UsersList;
