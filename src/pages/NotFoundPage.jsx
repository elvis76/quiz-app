import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {
    const navigate = useNavigate()

    return (
        <div className="lost">
            <h1>404</h1>
            <p>Seems like you're lost. You're now on your own</p>
            <button onClick={() => navigate('/')}>Please take me back</button>
        </div>
    )
}

export default NotFoundPage