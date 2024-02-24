import Logo from '../assets/logo.jpg'

export default function Header(){
    return (
        <header>
        <img src={Logo} alt="logo" />
        <h1>React Forms</h1>
        </header>
    )
}