import React, { ReactNode, useEffect, useState } from 'react';
import LeftSidebar from './sidebar/LeftSidebar';
import RightSidebar from './sidebar/RightSidebar';
import Login from './modals/Login';
import Register from './modals/Register';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '../firebase/config';

import '../styles/LayoutStyles.scss';


interface LayoutProps {
    children: ReactNode;
    title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {

    const auth = getAuth(firebaseApp);

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Subscribe to the authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        // Unsubscribe when the component unmounts
        return () => unsubscribe();
    }, [auth]);

    return (
        <div className='layout'>
            {/* <Navbar /> */}

            {/* Main content area */}
            <main>
                <LeftSidebar user={user} />

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