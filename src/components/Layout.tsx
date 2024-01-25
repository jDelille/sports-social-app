import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import LeftSidebar from './sidebar/LeftSidebar';
import RightSidebar from './sidebar/RightSidebar';
import Login from './modals/Login';
import Register from './modals/Register';

import '../styles/LayoutStyles.scss';

interface LayoutProps {
    children: ReactNode;
    title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
    return (
        <div className='layout'>
            <Navbar />

            {/* Main content area */}
            <main>
                <LeftSidebar />

                <div className='middle'>
                    <Login />
                    <Register />
                    {children}
                </div>

                <RightSidebar />
            </main>
        </div>
    )
}

export default Layout