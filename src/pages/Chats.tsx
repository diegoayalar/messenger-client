import Sidebar from '../components/Sidebar';

const Chats = () => {
    return (
        <>
        <Sidebar/>
            <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
                <h1 className="text-4xl font-bold mb-5">Welcome to chats!</h1>
            </div>
        </>
    );
};

export default Chats;
