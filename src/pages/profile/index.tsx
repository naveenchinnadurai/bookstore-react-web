import { useUser } from '@/context/userContext';

function Profile() {
    const { user, logoutUser } = useUser();
    return (
        <div className='h-full w-full flex flex-col justify-center items-center'>
            <div className="h-20 w-20 bg-gray-700 rounded-full flex items-center justify-center text-2xl mb-5"> ZB </div>
            <h1 className="text-white text-xl mb-1">{user?.name}</h1>
            <h1 className="text-white text-md">{user?.email}</h1>
            <h1 className="text-white text-sm mt-1">{user?.id}</h1>
            <span className="mt-2 underline text-md" onClick={() => { logoutUser() }}>Logout</span>
        </div>
    )
}

export default Profile
