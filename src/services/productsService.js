import { Category } from "@mui/icons-material";

const BASE_URL ="https://690a3c541a446bb9cc21e245.mockapi.io/products";



export const getProducts  = async (Category) =>{
    let url = BASE_URL;
    if (Category) {
        url += `?category=${Category}`;
    }

    const res = await fetch (url);
    if (!res.ok) {
        throw new Error ("No se pudieron obtener los productos");
    }
    const products = await res.json();
    return products;

}

export const getProductsById = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
        throw new Error("No se pudo obtener el producto");
    }

    const product = await response.json();
    return product;
}

export const createProduct = async (productData) => {

    const response = await fetch(BASE_URL, 
        {
            method: 'POST',
            headers: 
            {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        }
    )

    if (!response.ok) {
        throw new Error("No se pudo crear el producto")
    }
    const result = await response.json()
    return result;
}

