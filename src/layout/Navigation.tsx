import { PrimeIcons } from "primereact/api";
import { Button } from "primereact/button";
import { Menubar } from 'primereact/menubar';
import { Link } from "react-router-dom";

const items = [{
    label: 'Sign out',
    icon: PrimeIcons.SIGN_OUT
}]

const Navigation = () => {

    const signup = (
        <>
            <Button className="p-button-text mr-3" label="Sign in"><Link to="/sign-in"></Link></Button>
            <Button className="p-button p-button-outlined" label="Sign up" /><Link to="/sign-up"></Link>
        </>
    );

    return (
        <Menubar model={items} end={signup} />
    )
}

export default Navigation;