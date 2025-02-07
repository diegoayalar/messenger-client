interface SidebarChatProps {
    title: string;
    imageSrc: string;
    isCollapsed: boolean;
}

const SidebarChat = ({ title, imageSrc, isCollapsed }: SidebarChatProps) => {
    return (
        <button
            className={`flex items-center w-full h-16 mb-2 overflow-hidden shadow-lg
                rounded bg-white hover:shadow-xl transition-shadow duration-300
                ${isCollapsed ? 'justify-center' : ''}`}
        >
            <img
                className="w-20 h-20 object-cover transition-all duration-300"
                src={imageSrc}
            />
            
            {!isCollapsed && (
                <div className="p-4">
                    <p className="text-lg font-semibold text-gray-800">
                        {title}
                    </p>
                </div>
            )}
        </button>
    );
};

export default SidebarChat;
