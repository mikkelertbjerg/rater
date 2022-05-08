import { Toolbar } from 'primereact/toolbar';

const Footer = () => {

    const left = (
        <>
            left
        </>
    )

    const right = (
        <>
            right
        </>
    )

    return (
        <Toolbar className="p-4" left={left} right={right} />
    )
}

export default Footer;