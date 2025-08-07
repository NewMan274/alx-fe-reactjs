function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 md:p-8 md:max-w-sm sm:max-w-xs mx-auto my-20 rounded-lg shadow-lg sm:p-4 hover:shadow-xl">
      <img src="https://via.placeholder.com/150" alt="User" className="rounded-full md:w-36 md:h-36 sm:w-24 sm:h-24 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out" />
      <h1 className="md:text-xl text-blue-800 my-4 sm:text-lg hover:text-blue-500">John Doe</h1>
      <p className="text-gray-600 sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;