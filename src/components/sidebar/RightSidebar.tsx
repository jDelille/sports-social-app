import React from 'react'
import { Link } from 'react-router-dom'
import { FaHashtag, FaBell, FaBookmark, FaStar } from "react-icons/fa";
import { TbSoccerField } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { User, signOut } from 'firebase/auth';

type RightSidebarProps = {
    user: User | null;
    auth: any;
}


const RightSidebar: React.FC<RightSidebarProps> = ({ user, auth }) => {

    const noUser = user === null


    return (
        <div className='right-sidebar'>
            <div className='site-name'>
                <Link to="/">Wagerly</Link>
            </div>

            <ul>
                <Link to="/explore" className='link'><FaHashtag size={16} /> Explore</Link>
                <Link to="/sportsbook" className='link'><TbSoccerField size={16} />Sportsbook</Link>
                <Link to="/notifications" className='link'><FaBell size={16} />Notifications</Link>
                <Link to="/bookmarks" className='link'><FaBookmark size={16} />Bookmarks</Link>
                <Link to="/favorites" className='link'><FaStar size={16} />Favorites</Link>

                {!noUser && (
                    <div className='user-links'>
                        <a className='link' onClick={() => signOut(auth)}><FiLogOut size={16} /> Logout</a>
                    </div>
                )}

            </ul>



        </div>
    )
}

export default RightSidebar