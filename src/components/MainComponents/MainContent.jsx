import ProductsContainer from "./ProductsContainer";
import Sort from "./Sort";

function MainContent() {
  return (
    <div className="p-3 d-flex flex-column gap-5">
      <Sort />
      <ProductsContainer />
    </div>
  );
}

export default MainContent;
