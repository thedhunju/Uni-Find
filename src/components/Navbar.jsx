/*Navigation Bar*/

import { Link } from 'react-router-dom';
import { MessageCircle, User, PlusCircle, Search } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-bold text-blue-600">UNI-find</span>
                    </Link>

                    {/* Center Search (Optional - can be conditional or always present) */}
                    <div className="hidden md:flex flex-1 max-w-lg mx-8 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Search for items..."
                        />
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-4">
                        <Link to="/lost-found" className="text-gray-600 hover:text-blue-600 font-medium">
                            Lost & Found
                        </Link>
                        <Link to="/marketplace" className="text-gray-600 hover:text-blue-600 font-medium">
                            Marketplace
                        </Link>

                        <Link to="/sell" className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                            <PlusCircle className="h-4 w-4" />
                            <span>Post Ad</span>
                        </Link>

                        <Link to="/messages" className="text-gray-500 hover:text-blue-600">
                            <MessageCircle className="h-6 w-6" />
                        </Link>

                        <Link to="/profile" className="text-gray-500 hover:text-blue-600">
                            <User className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

