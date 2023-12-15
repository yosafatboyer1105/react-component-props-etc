function Profile(props) { // contoh penggunaan props. 
    return (
    <div>
        <h1>Menu Profile</h1>
        <p>Nama user: {props.profileName} </p>
    </div>
    );
}

export default Profile