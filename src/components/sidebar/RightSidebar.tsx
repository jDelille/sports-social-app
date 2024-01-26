import React from 'react'
import { Link } from 'react-router-dom'
import { FaHashtag, FaBell, FaBookmark, FaStar } from "react-icons/fa";
import { TbSoccerField } from "react-icons/tb";


const RightSidebar: React.FC = () => {
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
            </ul>

        </div>
    )
}

export default RightSidebar