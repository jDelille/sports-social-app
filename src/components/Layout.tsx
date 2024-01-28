import React, { ReactNode, useMemo, useState } from 'react';
import RightSidebar from './sidebar/RightSidebar';
import LeftSidebar from './sidebar/LeftSidebar';
import Login from './modals/Login';
import Register from './modals/Register';
import { User, getAuth, } from 'firebase/auth';
import { app } from '../firebase/config';
import PageHeader from './page-header/PageHeader';
import { IconType } from 'react-icons';
import { getCurrentUser, useAuth } from '../context/AuthContext';

import '../styles/LayoutStyles.scss';

interface LayoutProps {
    children: ReactNode;
    title: string;
    icon: IconType
}

const Layout: React.FC<LayoutProps> = ({ children, title, icon }) => {

    const auth = getAuth(app);

    const [user, setUser] = useState<User | null>(null);

    const { currentUser } = useAuth();

    useMemo(() => {
        getCurrentUser(setUser)
    }, [])

    return (
        <div className='layout'>
            <main>
                <LeftSidebar user={user} auth={auth} avatar={currentUser?.photoURL} />

                <div className='middle'>
                    <PageHeader title={title} icon={icon} />
                    <Login />
                    <Register />
                    <div className='middle-children'>
                        {children}
                    </div>
                </div>

                <RightSidebar user={user} auth={auth} />

            </main>
        </div>
    )
}

export default Layout