import Button from "../customComponents/Button";

import PropTypes from "prop-types";
import Star from "../customComponents/Star";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  return (
    <div className="col-lg-5 col-md-10 card mb-5 p-0 shadow-lg border-0" id={product.productId}>
      <div
        className="position-relative d-flex justify-content-around gap-4 productImgContainer rounded-top border-top border-bottom"
        style={
          product.bgColor !== "#FFFFFF"
            ? {
                background: `linear-gradient(180deg, ${product.bgColor}, ${product.bgColor})`,
              }
            : {
                background: "#343a40",
              }
        }
      >
        <img
          className="productLogo my-auto rounded-2"
          src={product.logo}
          alt="product-logo"
        ></img>
        <img
          className="productImg my-auto w-50 h-75 rounded-3"
          src={product.illustration}
          alt="product-img"
        ></img>

        <p className="position-absolute rating  bg-white px-1 rounded-1 fs-4">
          <Star starCount={5} fill={product.Ratings} customClass={"fill"} />
          <span className="text-black">({product.Ratings} Reviews)</span>
        </p>
        <span className="position-absolute text-white bg-danger fw-semibold  px-2 rounded-1 tag fs-4">
          {product.isFree ? "Free" : product.offer ? "On Offer" : ""}
        </span>
      </div>
      <div className="card-body p-5">
        <h3 className="card-header fs-4 pb-3 fw-semibold bg-white border-bottom-0 p-0">
          {product.title}
        </h3>
        <p className="pb-2 fs-5">{product.description}</p>
        <p className="fs-5 p-0 m-0 pb-1">
          <span className="fw-semibold">Price : ₹ {product.price} </span>
          {product.price > 0 && <span>({product.priceText})</span>}
        </p>
        <p className="fs-5 p-0 m-0 ">
          Offer Price :{" "}
          <span className="textFree fw-semibold">
            {product.isFree ? "Free" : product.offerPrice}{" "}
          </span>
          for customers
        </p>
      </div>
      <div className="card-footer w-100 border d-flex flex-md-column flex-lg-row gap-3 justify-content-around bg-white border-0 pb-4">
        <Button btnStyle={"btn btn-primary text-white px-3 rounded-1 fs-4"}>
          <a
            href={product.redirectionUrl}
            target="_blank"
            rel="noreferrer"
            className="link-light text-decoration-none"
          >
            View More Details
          </a>
        </Button>
        <Button btnStyle={"btn btn-outline-primary px-3 rounded-1 fs-4"}>
        <a
            href={product.redirectionUrl}
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none linkHover"
          >
          Open an Account
          </a>
          
        </Button>
      </div>
    </div>
  );
}

export default Product;
