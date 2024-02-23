import React from 'react';
import ClientSideComponent from './clientSide';

const ServerSideComponent = ({serverData}) => {
  return (
    <div>
        <h1>Server-Side Component</h1>
        <p>Data from server:{serverData}</p>
        {/* including the client-side component*/ }
        <ClientSideComponent />
    </div>
  );
};
{/*<ServerSideComponent />*/}
export async function getServerSideProps() {
  try{
    //fetch data from the Fake store API
    const response = await fetch('http://fakestoreapi.com/products');
   //check if the response was successful (status code 200)
   if(!response.ok){
    throw new Error(`Failed to fetch data from the fake store API. Status: ${response.status}`);
}

//parse the response JSON 
 const products = await response.json();

 console.log('Fetched products:', products);

return{  //return object from getServerSideProps function
    props:{
        serverData: JSON.stringify(products), //convert the data to a string simplicity
    },
   };
  } catch (error){
   console.log('Error fetching data:', error.message);

   return{
    props:{
        serverData:'failed to fetch data',
    }
   };
  }
}
export default ServerSideComponent;