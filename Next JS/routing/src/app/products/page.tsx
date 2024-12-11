// import React from 'react'

// const ProductList = () => {
//   return (
//     <div>
//       <h1>Product List</h1>
//       <h2>Product1</h2>
//       <h2>Product2</h2>
//       <h2>Product3</h2>

//     </div>
//   )
// }

// export default ProductList

import Link from "next/link";
export default function ProductList() {
  const productid = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h2>
        <Link href="products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="products/3">Product 3</Link>
      </h2>
      <h2>
        <Link href={`products/${productid}`}>Product {productid}</Link>
      </h2>
    </>
  );
}