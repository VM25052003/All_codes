import Logo from '../assets/logo.png'

export default function Header(){
    return (
        <div id='main-header'>
        <img src={Logo} alt="magnifying-glass" />
        <h1>React - Behind the scenes</h1>
        </div>
    )
}