import React from 'react';
import UserAvatar from '../user-avatar/UserAvatar';
import './UserBarStyles.scss';

type UserBarProps = {
    user: any;
    avatar: string;
}

const UserBar: React.FC<UserBarProps> = ({ user, avatar }) => {

    console.log(user)

    return (
        <div className='user-bar'>
            <UserAvatar src={avatar} />
            <div className='name'>
                <strong>{user?.[0]?.name}</strong>
                <span>@{user?.[0]?.displayName}</span>
            </div>
        </div>
    );
};

export default UserBar;