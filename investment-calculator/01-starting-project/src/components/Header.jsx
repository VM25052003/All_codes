import '../index.css'
import INVESTMENT_LOGO from '../assets/investment-calculator-logo.png'

export default function Header(){
    return (
        <header id="header">
            <img src={INVESTMENT_LOGO} alt="investment_logo" />
            <h1>INVESTMENT CALCULATOR</h1>
        </header>
    )
}