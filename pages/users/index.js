import React from 'react'; 
import {useRouter} from 'next/router';

export default function Users ({message}){
    const router = useRouter();
    const [userId, setUserId] =React.useState(1);
    const submitHandler = () => {
        const path = '/users/'+userId;
        //router.replace(path);
         router.push(path);
    }
    return(
        <div>
            <h2>{message}</h2>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={(e) => setUserId(e.target.value)}/>
                <button onClick={submitHandler}>Selected User</button>
            </form>
        </div>
    );
}
export function getServerSideProps(){
    return{
        props: {message: "Welcome to the Home Page for Users !!"},  
    };

}