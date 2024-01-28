import React from 'react';
import UserAvatar from '../user-avatar/UserAvatar';
import './UserBarStyles.scss';

type UserBarProps = {
    user: any;
}

const UserBar: React.FC<UserBarProps> = ({ user }) => {
    return (
        <div className='user-bar'>
            <UserAvatar />
            <div className='name'>
                <strong>{user[0]?.displayName}</strong>
            </div>
        </div>
    );
};

export default UserBar;