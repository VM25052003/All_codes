import { Link, useParams } from "react-router-dom"

export default function ProductDetailPage() {
    let params = useParams()
    return (
    <>
    <h1>Product Detail</h1>
    <p>{params.productId}</p>
    {/* Would get back to parent path, not to sibling. Adding relative, would remove one segment only from the active ones*/}
    <p><Link to=".." relative="path">Back</Link></p>
    </>
    )
}