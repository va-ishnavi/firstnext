"use client"
import React,{useState,useEffect} from "react";

const ClientSideComponent = ({data}) => {
    const [clientData, setClientData]= useState(null);
    console.log("---",data);
    useEffect(() => {
        const fetchData = async () =>{
            return'Data from client';
        };
        fetchData().then((result) => {
          setClientData(result);
        });
    },[]);

  return (
    <div>
        <h1>client-Side Component</h1>
        <p> Data from client:{clientData}</p>
    </div>
  );
};

export default ClientSideComponent;