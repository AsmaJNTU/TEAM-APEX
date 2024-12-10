import React from 'react'

const Docs = ({
    params,
}:{
    params:{
        slug:string[];
    };
}) => {
    if (params.slug?.length===2){
  return (
    <div>
      <h1>viewing Docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
    </div>
  );
}
else if(params.slug?.length===1){
    return <h1>Viewing docs feature {params.slug[0]}</h1>
}
return <h1>Docs home page</h1>
}
export default Docs
