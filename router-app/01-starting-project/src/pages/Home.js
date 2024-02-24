import { Link, useNavigate } from "react-router-dom"

export default function HomePage() {
    const navigate = useNavigate()
    //Navigate programmatically, like for timer expired, or form submitted
    function navigationHandler() {
        navigate('/products')
    }

    return (
    <>
    <h1>My Home Page</h1>
    {/* <p>Go to <a href="/products">List of products</a>.</p> here problem is that we are sending a new request to the server serving this website */}
    <p>Go to <Link to="/products">List of products</Link></p>
    <p><button onClick={navigationHandler}>Navigate</button></p>
    </>
    )
}
