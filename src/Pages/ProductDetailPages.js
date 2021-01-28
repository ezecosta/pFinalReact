import React, { useState, useEffect } from "react"
import ProductComponents from "../Components/ProductComponents"
import { getProduct } from "../Services/ProductsServices"


function ProductDetailPages(props) {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [got_product, setGotProduct] = useState(false);
    
    
        useEffect(
            () => {
                if(got_product === false){
                //"componentDidMount - hook equivalente")
                async function fetchData() {
                    const response = await getProduct(props.match.params.id)
                    setProduct(response.data);
                    setLoading(false)

                    if(response){
                        setGotProduct(true)
                    }
                }
                fetchData();
                }    
                setGotProduct(true);    
            },[got_product, props.match.params.id]);

    // useEffect(
    //     () => {
    //         async function fetchData() {
    //             const response = await getProduct(props.match.params.id)
    //             console.log(response);
    //             setProduct(response.data);
    //             setLoading(false);
    //         }
    //         fetchData();
    //         console.log("producto:"+product)
    //     }, );
            
        


    return (
        <>
            {
                loading && <div>Loading ...</div>
            }
            {
                !loading &&
                <div>
                    <ProductComponents key={product.id} product={product} seeDetail={false} seeBuy={true}/>
                </div>
            }
        </>
    )
}

export default ProductDetailPages;