import { User, signOut } from "firebase/auth";
import { AppInfoString } from "../../app-string/AppInfoString"
import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import Button from "../button/Button";
import { AuthString } from "../../app-string/AuthString";
import './SidebarStyles.scss';
import SearchBar from "../search-bar/SearchBar";
import UserBar from "../user-bar/UserBar";

type LeftSidebarProps = {
    user: any;
    auth: any;
    avatar: string;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ user, auth, avatar }) => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const noUser = user && user.length === 0


    return (
        <div className='left-sidebar'>
            {noUser ? (
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
            ) : (
                <div>
                    <SearchBar />
                    <UserBar user={user} avatar={avatar} />
                </div>
            )}

        </div>
    )
}

export default LeftSidebar