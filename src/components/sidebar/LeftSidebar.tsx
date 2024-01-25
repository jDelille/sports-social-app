import { User } from "firebase/auth";
import { AppInfoString } from "../../app-string/AppInfoString"
import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import Button from "../button/Button";
import { AuthString } from "../../app-string/AuthString";
import './SidebarStyles.scss';

type LeftSidebarProps = {
    user: User | null
}

const LeftSidebar: React.FC<LeftSidebarProps> = (user) => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const noUser = user !== null


    return (
        <div className='left-sidebar'>
            {noUser && (
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
            )}

        </div>
    )
}

export default LeftSidebar