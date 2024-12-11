// import React from 'react'

// const Blog = () => {
//   return (
//     <div>
//      <h1>My Blog</h1> 
//     </div>
//   )
// }

// export default Blog


import { Metadata } from "next";

export const metadata:Metadata={
  title:{
    absolute:"Blog",
  },
  };

export default function Blog(){
return <h1>My Blog</h1>
}

