//1. same as 2
import React from "react";

const ContactComponent = (props) =>{
    return(
        <h2>{props.message}</h2>
    )
}
export function getServerSideProps(){
    //fetch
    return{
        props: {message: "Welcome to contact Page"},  
    };
}

export default ContactComponent;

//2.
// export default function Contact({message}){
//     return(
//         <div>
//             <h1>{message}</h1>
//         </div>
//     );
// }
// export function getServerSideProps(){
//     return{
//         props: {message: "Welcome to the Contact Page!!"},  
//     };
// }