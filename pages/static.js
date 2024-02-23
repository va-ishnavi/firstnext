import React from 'react';

const StaticPage = ({staticData}) => (
    <div>
        <h1>Static Site Generation Page</h1>
        <p>Data at build time :{staticData}</p>
    </div>
  
);

export async function getStaticProps() { 
//simulate fetching data from API at build time 
const StaticData = 'Data at build time (Static Generation)';
//props object
return{
    props:{
        StaticData,
        },
};
}