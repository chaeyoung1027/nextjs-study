import { useRouter } from 'next/router'

function ProductDetail(props) {
    const router = useRouter()
    console.log(router.query)
    const id = router.query.productId
    
    return <h1>Product Detail #{id}</h1>
}

export default ProductDetail