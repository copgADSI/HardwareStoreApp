import { Link } from "react-router-dom"

const SingleCategory = ({ category }) => {
    return (
        <div className="relative rounded-sm overflow-hidden group">
            <img style={{maxHeight:'200px'}} src={category.image} alt={category.text} className="w-full" />
            <Link to={category.to} className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">
                {category.text}
            </Link>
        </div>
    )
}

export default SingleCategory