/*import React from 'react'

const ProductDetails = ({
    params,
}:{
    params:{productid: string};
}
) => {
  return (
    <div>
      <h1>Details about paroduct {params.productid}</h1>
    </div>
  )
}

export default ProductDetails*/

import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = params;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(productId);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Details about product {params.productId}</h1>;
}