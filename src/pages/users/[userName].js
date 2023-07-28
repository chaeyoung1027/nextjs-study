import { useRouter } from 'next/router'

function mirim(props) {
    const router = useRouter()
    console.log(router.query)
    const name = router.query.userName
    
    return <h1>환영합니다 {name}님</h1>
}

export default mirim