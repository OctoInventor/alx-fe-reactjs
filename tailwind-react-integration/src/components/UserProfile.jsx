function UserProfile() {
    return (
        <div className= "bg-gray-100 p-8 max-w-sm-400 max-auto my-20 rounded-lg shawdow-lg">
            <image className= "rounded-full w-36 h-36 mx-auto" 
            src="https://via.placeholder.com/150" alt="User" />
            <h1 className= "text-x1 text-blue-800">John Doe</h1>
            <p className="text-gray-600 text-base">
                Web Developer at XYZ Co. Loves to write code and explore new technologies</p>
        </div>
    );
}

export default UserProfile;