import { ProfileHead } from '../../modules/profile';
import { Biography } from '../../modules/profile';
import { Favourites } from '../../modules/profile';
import { useMeAccountQuery } from '../../common/generated/graphql';
import { useGetProfileFromURL } from '../../common/utils/getProfileFromUrl';

function ProfileContent() {
    const { data: currentUserData } = useMeAccountQuery();
    const { data, error, loading } = useGetProfileFromURL();

    if (loading) {
        return (<div>Loading...</div>)
    }

    if (error) {
        return <div>{ error.message }</div>
    }

    if (!data?.accounts || data.accounts.length === 0) {
        return <div>Could not find user</div>
    }

    const profileData = data.accounts[0];
    const isUser = (currentUserData?.me?.id === profileData.id || false); 

    const { avatarLocation, username, name, favouriteTeam, bio } = profileData;

    let render = profileData && 
        <div className='flex flex-col w-2/3 m-auto space-y-6'>
            <ProfileHead data={{
                avatarLocation,
                name,
                username,
                followers: 0,
                following: 0
                }}
                isUser={ isUser }
            />
            <Biography data={{
                bio
            }}/>
            <Favourites data={{
                favouriteTeam
            }} />
        </div>


    return <>{ render }</>;
}

export default ProfileContent;