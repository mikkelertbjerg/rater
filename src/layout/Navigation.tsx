import { PrimeIcons } from "primereact/api";
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";



const Navigation = () => {
    const navigate = useNavigate();
    const signOut = (): void => {
        sessionStorage.clear();
        navigate("/");
    };

    const items = [
        {
            label: "Join session",
            icon: PrimeIcons.ARROW_RIGHT,
            command: () => navigate("/session/join")
        },
        {
            label: "Create session",
            icon: PrimeIcons.PLUS,
            command: () => navigate("/session/create")
        },
        {
            label: "Sign up",
            icon: PrimeIcons.USER_EDIT,
            command: () => navigate("/sign-up")
        },
        {
            label: "Sign in",
            icon: PrimeIcons.SIGN_IN,
            command: () => navigate("/sign-in")
        },
        {
            label: "Sign out",
            icon: PrimeIcons.SIGN_OUT,
            command: () => signOut()
        },
    ]

    const end = (
        <>
            <Button className="p-button-text mr-3" label="Sign in" onClick={() => navigate("/sign-in")} />
            <Button className="p-button p-button-outlined" label="Sign up" onClick={() => navigate("/sign-up")} />
        </>
    );

    return (
        <Menubar model={items} end={end} />
    )
}

export default Navigation;