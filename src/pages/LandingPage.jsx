import Categories from "../components/Categories";
import Features from "../components/Features";
import Banner from "../components/Banner";
import useFormData from "../hooks/useFormData"

const LandingPage = () => {
    const { isLoading } = useFormData();
    if (isLoading) {
        return <div>Cargando productos...</div>
    }
    return (
        <>
            <Banner />
            <Features />
            <Categories />
        </>
    )
}

export default LandingPage