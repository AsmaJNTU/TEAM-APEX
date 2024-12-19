// import React from 'react'
// import '../../globals.css'

// const page = ({user}) => {
//   return (
//     <div>
//       {user &&
//       <div className="page">
//       <main className="main">
//         <h2>User List</h2>
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <div className="grid">
            
//               <div key={user.id} className="card">
//                 <p>
//                   <strong>Name:</strong> {user.name}
//                 </p>
//                 <p>
//                   <strong>Email:</strong> {user.email}
//                 </p>
//                 <p>
//                   <strong>Company:</strong> {user.company.name}
//                 </p>
//                 <p>
//                   <strong>Phone:</strong> {user.phone}
//                 </p>
//                 <p>
//                   <strong>website:</strong> {user.website}
//                 </p>
//                 <p>
//                   <strong>Address:</strong> {user.address.street},{user.address.city},{user.address.zipcode}
//                 </p>
//               </div>
           
//           </div>
//         )}
//       </main>
//     </div>
//     }
//     </div>
//   )
// }

  

// export async function UserPage({ params }){
//     const res=await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
//     const user =await res.json()

//     return {props:{ user }}
// }
// export default page




import React from "react";
import "../../globals.css";

async function fetchUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  return res.json();
}

export default async function Page({ params }) {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className="page">
      <main className="main">
        <h2>User Details</h2>
        <div className="grid">
          <div className="card">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Company:</strong> {user.company.name}
            </p>
            <p>
                   <strong>Phone:</strong> {user.phone}
             </p>
             <p>
                   <strong>website:</strong> {user.website}
            </p>
            <p>
                  <strong>Address:</strong> {user.address.street},{user.address.city},{user.address.zipcode}
             </p>
          </div>
        </div>
      </main>
    </div>
  );
}
