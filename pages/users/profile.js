export default function Profile ({message}){
    return(
        <div>
           <h1>{message}</h1>
        </div>
    )

}
export function getServerSideProps(){
    return{
        props:{
            message: "Welcome to the  Profile page"
        },
    };
}