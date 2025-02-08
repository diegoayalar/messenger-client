import { useState } from 'react';
import SidebarChat from './SidebarChat';
import { ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { logOut } from '../api/auth';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleLogOut = async () => {
        try {
            await logOut();
            window.location.reload();
        } catch (error) {
            console.error('Error during logout:', error);
            alert('An error occurred during logout. Please try again later.');
        }
    };

    return (
        <div
            className={`fixed flex flex-col h-screen bg-gray-300 transition-all duration-300 ${
                isCollapsed ? 'w-20' : 'w-64'
            }`}
        >
            {/* Collapse button */}
            <button
                className={`p-2 focus:outline-none transition-all duration-300 ${
                    isCollapsed ? 'self-center' : 'self-end'
                }`}
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                {isCollapsed ? (
                    <ChevronRight size={24} />
                ) : (
                    <ChevronLeft size={24} />
                )}
            </button>

            {/* Title */}
            {/*   <div className="flex items-center justify-center my-2">
                    <MessageSquare/>
                    {!isCollapsed && (
                        <h1 className="text-3xl ml-2 font-bold font-mono text-gray-800">
                            Messenger
                        </h1>
                    )}
                </div>
                <div className="border-t border-gray-400 mx-2"></div>
            */}

            {/* Chat List */}
            <div className="flex-1 p-2 overflow-y-auto">
                <ul>
                    <li>
                        <SidebarChat
                            title="Chat title"
                            imageSrc="https://placehold.co/20"
                            isCollapsed={isCollapsed}
                        />
                    </li>
                </ul>
            </div>

            {/* User Profile */}
            <div className="mt-2">
                <div className="border-t border-gray-400 mx-2"></div>
                <button
                    className={`flex items-center w-full p-2 ${
                        isCollapsed ? 'justify-center' : ''
                    }`}
                >
                    <img
                        className={`w-12 h-12 rounded-full ${
                            !isCollapsed ? 'mr-2' : ''
                        }`}
                        src="https://placehold.co/12"
                    />
                    {!isCollapsed && (
                        <div>
                            <p className="font-semibold text-gray-800">
                                Username
                            </p>
                        </div>
                    )}
                </button>
            </div>

            {/* Logout */}
            <div className="px-2">
                <button
                    onClick={handleLogOut}
                    className="flex items-center justify-center p-2 my-2 w-full rounded bg-gray-500 hover:bg-gray-600 text-white"
                >
                    <LogOut />
                    {!isCollapsed && (
                        <p className="ml-4 font-semibold">Log out</p>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
