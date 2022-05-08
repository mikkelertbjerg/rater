import { PrimeIcons } from "primereact/api";
import { Button } from "primereact/button";
import { Menubar } from 'primereact/menubar';

const items = [{
    label: 'Sign out',
    icon: PrimeIcons.SIGN_OUT
}]

const Navigation = () => {

    const signup = (
        <>
            <Button className="p-button-text mr-3" label="Sign in" />
            <Button className="p-button p-button-outlined" label="Sign up" />
        </>
    );

    return (
        <Menubar model={items} end={signup} />
    )
}

export default Navigation;