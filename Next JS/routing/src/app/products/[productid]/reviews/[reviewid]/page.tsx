import React from 'react'

const ReviewDetails = ({
    params,
}:{
    params:{
        productid: string;
        reviewid: string};
}
) => {
  return (
    <div>
      <h1>Review {params.reviewid} for product {params.productid}</h1>
    </div>
  )
}

export default ReviewDetails

