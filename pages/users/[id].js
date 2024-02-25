import { useRouter } from "next/router";

const UserDetailPage = ({user})=>{
    const router = useRouter();

    if(router.isFallback){
        return<div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>Id: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            </div>
    );
};

    export  async function getServerSideProps(context){
        const {id} = context.query;
        //fetch user data using the 'id' from the server
        //const user = await fetchUserById(id);
        return{
            props: {
                user:{
                    id,  //user id (this is for, what u want to give then it will pass the object)
                    name: 'Vaishnavi',
                    email: 'vaishnavigupta@gmail.com'
                }
            },
        };
    }
    export default UserDetailPage;
