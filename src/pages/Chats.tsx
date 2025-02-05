const Chats = () => {
    const handleLogOut = () => {
        localStorage.removeItem('authToken');
        window.location.reload();
    };

    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold mb-5">
                Welcome to chats!
            </h1>
            <div className="justify-end">
                <button
                    onClick={handleLogOut}
                    className="text-3xl font-normal rounded shadow p-2 bg-gray-200 hover:bg-gray-300"
                >
                    Log out
                </button>
            </div>
        </div>
    );
};

export default Chats;
