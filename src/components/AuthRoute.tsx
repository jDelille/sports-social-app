import React, { ReactNode, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface IAuthRouteProps {
    children: ReactNode;
};

const AuthRoute: React.FC<IAuthRouteProps> = (props) => {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false);
            } else {
                console.log("Unauthorized");
                navigate('/');
            }
        });

        return () => unsubscribe();

    }, [auth, navigate]);

    if (loading) return <p> Loading... </p>;

    return (
        <>{children}</>
    )
}

export default AuthRoute