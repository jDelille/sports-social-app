import { AppInfoString } from "../../app-string/AppInfoString"
import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import Button from "../button/Button";
import { AuthString } from "../../app-string/AuthString";
import { Link } from "react-router-dom";
import './SidebarStyles.scss';

type RightSidebarProps = {
    user: any;
    auth: any;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ user }) => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const noUser = user && user.length === 0


    return (
        <div className='right-sidebar'>
            <div className='site-name'>
                <Link to="/">Wagerly</Link>
            </div>
            {noUser && (
                <div className="user-auth-wrapper">
                    <p>{AppInfoString.NotLoggedInMessage.value}</p>
                    <Button
                        onClick={registerModal.onOpen}
                        label={AuthString.CreateAccount.value}
                        ariaLabel={AuthString.CreateAccount.value}
                    />
                    <Button
                        onClick={loginModal.onOpen}
                        label={AuthString.Login.value}
                        ariaLabel={AuthString.Login.value}
                    />
                </div>
            )}

        </div>
    )
}

export default RightSidebar