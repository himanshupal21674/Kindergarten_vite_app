import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaShoppingCart } from 'react-icons/fa';

const TopHeader = () => {
  return (
    <div className="bg-primary text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <span className="mr-2">57/A, GREEN LANE, NYC</span>
          </div>
          <div className="flex items-center">
            <span>+10 (78) 367 3692</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200 transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-200 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-200 transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-gray-200 transition-colors"><FaInstagram /></a>
          </div>
          <div className="border-l pl-4">
            <FaShoppingCart className="text-xl hover:text-gray-200 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;