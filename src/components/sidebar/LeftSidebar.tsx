import React from 'react'
import { Link } from 'react-router-dom'
import { GiSoccerField } from "react-icons/gi";
import { CiHashtag, CiBellOn, CiBookmark, CiStar, CiLogout } from "react-icons/ci";
import { signOut } from 'firebase/auth';
import UserBar from '../user-bar/UserBar';

type LeftSidebarProps = {
    user: any;
    auth: any;
    avatar: string;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ user, auth, avatar }) => {

    const noUser = user && user.length === 0

    return (
        <div className='left-sidebar'>
            <UserBar user={user} avatar={avatar} />
            <ul>
                <Link to="/explore" className='link'>
                    <div className='icon-wrapper'>
                        <CiHashtag size={18} color='#3e434e' />
                    </div>
                    Explore
                </Link>
                <Link to="/sportsbook" className='link'>
                    <div className='icon-wrapper'>
                        <GiSoccerField size={18} color='#3e434e' /></div>
                    Sportsbook
                </Link>
                <Link to="/notifications" className='link'>
                    <div className='icon-wrapper'>
                        <CiBellOn size={18} color='#3e434e' />
                    </div>
                    Notifications
                </Link>
                <Link to="/bookmarks" className='link'>
                    <div className='icon-wrapper'>
                        <CiBookmark size={18} color='#3e434e' />
                    </div>
                    Bookmarks
                </Link>
                <Link to="/favorites" className='link'>
                    <div className='icon-wrapper'>
                        <CiStar size={18} color='#3e434e' />
                    </div>
                    Favorites
                </Link>

                {!noUser && (
                    <div className='user-links'>
                        <a className='link' onClick={() => signOut(auth)}>
                            <div className='icon-wrapper'>
                                <CiLogout size={18} color='#3e434e' />
                            </div>
                            Logout
                        </a>

                    </div>
                )
                }

            </ul >



        </div >
    )
}

export default LeftSidebar