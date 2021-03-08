import noCache from '../../utils/noCache';
import avatarDefault from '../../images/illustrations/avatar-default.jpg';

interface ProfileHeadProps {
    data: {
        avatarLocation?: string | null
        username?: string | null
        name?: string | null
        followers?: number | null
        following?: number | null
    }
}

function ProfileHead({data: { username, name, avatarLocation }}: ProfileHeadProps) {
    return (
        <div className='flex fg-item p-10'>
            <img className='h-32 w-32 rounded-full' src={ avatarLocation ? noCache(avatarLocation) : avatarDefault } alt='Avatar' />
            <div className='ml-8'>
                <header className='font-bold text-2xl'>{ username }</header>
                <p className='font-medium text-gray-700'>{ name }</p>
            </div>
            <div className='flex w-full items-start justify-end'>
                <div className='flex space-x-4 items-center'>
                    <p className='font-medium'>Following <span className='font-normal text-gray-700'>10</span></p>
                    <p className='font-medium'>Followers <span className='font-normal text-gray-700'>4</span></p>
                    <button className='button bg-red-400 text-white px-4 py-2 ml-8'>Follow</button>
                </div>
            </div>
        </div> 
    )
}

export default ProfileHead;
