function UserProfile() {
    return (
        <div className="bg-gray-100 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
           <img
                src="profile-image.jpg"
                alt="profile-image"
                className="sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto" />
            <h1 className="text-lg sm:text-xl md:text-xl my-4">John Doe</h1>
            <p className="text-sm sm:text-base">
                Web Developer at XYZ Co. Loves to write code and explore new technologies
            </p>
        </div>
    );
}

export default UserProfile;
