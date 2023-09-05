import { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import HomeContext from "../../contexts/HomeContext";

export default function ButtonContext() {
    const value = useContext(ProductContext);
    const { message } = useContext(HomeContext);
    console.log(value)
    console.log(message)
    return (
        <button>{message}</button>
    )
}