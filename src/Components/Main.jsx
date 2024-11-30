// import React from 'react'

import Fetchapi from "./Fetchapi";

// import Fetchapi from "./Fetchapi"

const Main = () => {
  const { data, isLoading, error } = Fetchapi("https://dummyjson.com/products?limit=20");

  if (error) return <p>Error!</p>;
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      
        {data?.map((item, i) => (
            
          <div key={i} style={{
            borderBottom: "2px solid black",
            textAlign: "center",
            padding: "10px",
            margin: "10px 0",
            
          }}>
           <h1>{item.brand}</h1>
           <img src={item?.images} alt={item.brand} style={{width:"500px"}} />
          {console.log(item.images)}
          </div>
        ))}
      
    </div>
  );
};

export default Main;
