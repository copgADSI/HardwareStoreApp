import Breadcrums from "../components/Breadcrums";
import ShopWrapper from "../components/ShopWrapper";

const ShopPage = () => {
    return (
        <>
            {/* BREADCRUMS */}
            <Breadcrums title="Tienda" icon="fa-solid fa-shop" />
            {/* BREADCRUMS END */}
            {/* SHOP WRAPPER */}
            <ShopWrapper />
            {/* SHOP WRAPPER END */}
        </>
    )
}

export default ShopPage