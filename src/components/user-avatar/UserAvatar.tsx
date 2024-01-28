import React from 'react';
import './UserAvatarStyles.scss';

type UserAvatarProps = {
    src: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ src }) => {
    return <img src={src || './assets/avatar-placeholder.png'} className='avatar' />;

};

export default UserAvatar;