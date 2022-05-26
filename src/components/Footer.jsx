import { useNavigate } from "react-router-dom"

const Footer = () => {
    let navigate = useNavigate()

    const handleClick = () => {
        navigate('/credits')
    }
    return (
        <div className="Footer-container Dark">
            <div></div>
            <div className="Footer-content">
                <p>© Dylan Marvel 2022</p>
                <p className="Credits" onClick={()=>handleClick()}>icon credits</p>
            </div>
            <div></div>
        </div>

    )
}

export default Footer