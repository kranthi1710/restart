const Userlist=({users})=>{
    return (
        <>
        <p>User list displayed</p>
        <ul>
        {users.map((user,index)=>(
            <li key={index}>{user}</li>
        ))}
        </ul>
        </>
    )
}

export default Userlist