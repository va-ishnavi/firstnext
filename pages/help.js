import React from "react";

const HelpComponent = (props) =>{
    return(
        <h2>{props.message}</h2>
    )
}
export function getServerSideProps(){
    //fetch
    return{
        props: {message: "Help Page goes here"},  
    };
}

export default HelpComponent;