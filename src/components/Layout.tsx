import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

import '../styles/LayoutStyles.scss';
import Login from './modals/Login';


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
                    {children}
                </div>

                <RightSidebar />
            </main>

            {/* <Footer /> */}
        </div>
    )
}

export default Layout