import Product from "./Product";
import { ProductContext } from "../customContext/ProductContext";
import { useContext } from "react";

function ProductsContainer() {
  const { productsList, isLoading } = useContext(ProductContext);

  return (
    <div className="row justify-content-center gap-5 px-3 py-5 m-2 productContainer">
      {isLoading && <p className="text-center fs-4">Loading...</p>}
      {productsList.length > 0 &&
        !isLoading &&
        productsList.map((product) => (
          <Product product={product} key={product.productId} />
        ))}

      {productsList.length <= 0 && !isLoading && (
        <p className="text-center fs-4">No Products found ☹️</p>
      )}
    </div>
  );
}

export default ProductsContainer;
