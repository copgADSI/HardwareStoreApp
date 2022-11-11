import { Link } from "react-router-dom"

const Breadcrums = ({ title, icon }) => {
    return (
        <div className="container py-4 flex items-center">
            <Link to="/" className="text-primary text-base">
                <i className={icon}></i>
            </Link>
            <span className="text-sm text-gray-400">
                <i className="fas fa-chevron right"></i>
            </span>
            <p className="text-gray-600 font-medium">{title}</p>
        </div>
    )
}

export default Breadcrums