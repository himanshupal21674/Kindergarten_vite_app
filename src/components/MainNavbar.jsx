const MainNavbar = () => {
  return (
    <nav className="bg-white py-4 px-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <h1 className="text-3xl font-bold">
            <span className="text-blue-500">Kinder</span>
            <span className="text-yellow-500">garten</span>
          </h1>
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-primary transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-primary transition-colors">Class</a>
          <a href="#" className="text-gray-700 hover:text-primary transition-colors">About</a>
          <a href="#" className="text-gray-700 hover:text-primary transition-colors">Blog</a>
          <a href="#" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
        </div>

        <button className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
          Enroll Now
        </button>
      </div>
    </nav>
  );
};

export default MainNavbar;