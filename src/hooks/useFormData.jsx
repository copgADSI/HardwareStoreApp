import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { createProduct, createUser, loginUser } from "../services";
import { getBrands } from "../services/brands";
import { getCategories } from "../services/categories";
import { addFavorite, getFavorites, getProducts, showProduct } from "../services/products";
import { getCart } from "../services/shoppingCart";

export const useFormData = () => {

    const { productId } = useParams();
    const [user, setUser] = useState([]);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user);
    }, []);


    const handleSercivesTodo = (event) => {
        event.preventDefault();
        const { id: form_id } = event.target
        const form_data = new FormData(event.target);
        form_data.append('user_id', user?.id);
        const data = Object.fromEntries(form_data.entries());
        const MUTATIONS = {
            createUser: () => mutateCreateUser(data),
            createProduct: () => mutateCreateProduct(data),
            addFavorite: () => mutateAddFavorite(data),
        };
        MUTATIONS[form_id]()
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form_data = new FormData(event.target);
        const data = Object.fromEntries(form_data.entries())
        const respose_data = await loginUser(data);
        localStorage.setItem('access_token', respose_data.token);
        localStorage.setItem('user', JSON.stringify(respose_data.user));
        window.location.href = "/";
    }


    const queryClient = useQueryClient()

    const { data: shopping_cart } = useQuery(['projects', user], () => getCart(user.id), {
        enabled: !!user?.id,
    })

    const { data: products, isLoading } = useQuery(['products'], getProducts);
    const { data: product_details, isLoading: productDetailsIsLoading } = useQuery(['show_product', productId],
        () => showProduct(productId), {
        enabled: !!productId,
    });
    const { data: categories, isLoadingCategories } = useQuery(['categories'], getCategories);
    const { data: brands, isLoadingBrands } = useQuery(['brands'], getBrands);
    const { data: favorites, isLoading: isLoadingFavorites } = useQuery(['favorites_added', user],
        () => getFavorites({ user_id: user?.id }), {
        enabled: !!user?.id,
    })

    /* MUTACIONES */
    const { mutate: mutateCreateUser, isSuccess } = useMutation(createUser, {
        onSuccess: () => {
            queryClient.invalidateQueries(['list-users'])
        }
    })

    const { mutate: mutateCreateProduct, isSuccess: isSuccessCreateProduct } = useMutation(createProduct, {
        onSuccess: () => {
            queryClient.invalidateQueries(['list-users'])
        }
    })

    const { mutate: mutateAddFavorite, isAddedSuccess } = useMutation(addFavorite, {
        onSuccess: () => {
            queryClient.invalidateQueries(['favorites_added'])
        },
        enabled: !!user?.id,
    })

    return {
        handleSercivesTodo, isSuccessCreateProduct, isSuccess, handleSubmit,
        products: products?.products, productsRandom: products?.productsRandom, isLoading,
        shopping_cart,
        categories, isLoadingCategories, brands, isLoadingBrands,
        isAddedSuccess, favorites, isLoadingFavorites,
        product_details: product_details?.product, productDetailsIsLoading
    }
}

export default useFormData