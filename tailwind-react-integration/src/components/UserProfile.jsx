function UserProfile() {
    return (
        <div className="bg-gray-100 p-4 sm:p-8 max-w-xs sm:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
           <img
                src="profle-image.jpg"
                alt="profile-image"
                className="w-24 h-24 sm:w-36 sm:h-36 max-auto" />
            <h1 className="text-lg sm:text-xl my-4">John Doe</h1>
            <p className="text-sm sm:text-base">
                Web Developer at XYZ Co. Loves to write code and explore new technologies
            </p>
        </div>
    );
}

export default UserProfile;
