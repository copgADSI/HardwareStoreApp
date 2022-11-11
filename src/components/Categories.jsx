import { CATEGORIES } from "../utils/utils"
import SingleCategory from "./SingleCategory"
const Categories = () => {
    return (
        <div className="container py-16">
            <h2 className="text-3xl font-medium text-gray-800 uppercase mb-6">Comprar por Categoria</h2>
            <div className="grid grid-cols-3 gap-3">
                {/* SINGLE CATEGORY */}
                {CATEGORIES.map((category) => (
                    <SingleCategory key={category.id} category={category} />
                ))}
                {/* END SINGLE CATEGORY */}

            </div>
        </div>
    )
}

export default Categories