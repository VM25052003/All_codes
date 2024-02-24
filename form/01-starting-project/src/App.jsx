import Header from "./components/Header";
import LoginState from "./components/LoginState";
import Login from "./components/Login";
import Signup from "./components/Signup";

export default function App(){
    return (
        <>
        <Header />
        <main>
            <LoginState />
        </main>
        </>
    )
}