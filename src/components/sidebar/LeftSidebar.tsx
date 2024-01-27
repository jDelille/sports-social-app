import { User, signOut } from "firebase/auth";
import { AppInfoString } from "../../app-string/AppInfoString"
import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import Button from "../button/Button";
import { AuthString } from "../../app-string/AuthString";
import './SidebarStyles.scss';
import SearchBar from "../search-bar/SearchBar";

type LeftSidebarProps = {
    user: User | null;
    auth: any;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ user, auth }) => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const noUser = user === null

    return (
        <div className='left-sidebar'>
            {noUser ? (
                <div className="user-auth-wrapper">
                    <p>{AppInfoString.NotLoggedInMessage.value}</p>
                    <Button
                        onClick={registerModal.onOpen}
                        label={AuthString.CreateAnAccount.value}
                        ariaLabel={AuthString.CreateAnAccount.value}
                    />
                    <Button
                        onClick={loginModal.onOpen}
                        label={AuthString.Login.value}
                        ariaLabel={AuthString.Login.value}
                    />
                </div>
            ) : (
                // <Button
                //     onClick={() => signOut(auth)}
                //     label={AuthString.Logout.value}
                //     ariaLabel={AuthString.Logout.value}
                // />
                <div>
                    <SearchBar />
                </div>
            )}

        </div>
    )
}

export default LeftSidebar