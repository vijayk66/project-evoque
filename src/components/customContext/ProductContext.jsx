import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

ProductProvider.propTypes = {
  children: PropTypes.any,
};

const initialState = {
  query: "",
  selectedSort: 1,
  developedBy: 0,
  selectedRating: 0,
  selectedPrice: 0,
  selectedAppType: 0,
  selectedPage: 1,
  isLoading: false,
  productsList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "searchQuery":
      return { ...state, query: action.payload };
    case "sorting":
      return { ...state, selectedSort: action.payload };
    case "developed":
      return { ...state, developedBy: action.payload };
    case "rating":
      return { ...state, selectedRating: action.payload };
    case "price":
      return { ...state, selectedPrice: action.payload };
    case "appType":
      return { ...state, selectedAppType: action.payload };
    case "page":
      return { ...state, selectedPage: action.payload };
    case "loading":
      return { ...state, isLoading: action.payload };
    case "product":
      return { ...state, productsList: action.payload };
  }
}

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    query,
    selectedSort,
    developedBy,
    selectedRating,
    selectedPrice,
    selectedAppType,
    selectedPage,
    isLoading,
    productsList,
  } = state;

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchProducts() {
        try {
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Token":
                "eyJhbGciOiJIUzUxMiIsImlhdCI6MTYwODEwMDI4MCwiZXhwIjoxNjE1ODc2MjgwfQ.eyJ0eXBlIjozLCJpZCI6MTQ5MzMsImNyZWF0ZWQiOiIyMDIwLTEyLTE2IDA2OjMxOjIwLjczMTk2NiJ9.Ef001xBUX_ZPsgvGWCou9sUa6Q2BV9jvPWZZsnwE8qB3_IDTGaSNV0d0lmcuWab2FwEUQ3GouA9LVdd7ExmkvQ",
            },
            body: JSON.stringify({
              page_num: 2,
              text: query,
            }),
          };

          dispatch({ type: "loading", payload: true });

          const response = await fetch(
            "https://18ebbuf8l8.execute-api.ap-south-1.amazonaws.com/demo/api/v3/user/marketplace/search",
            options,
            { signal: controller.signal }
          );

          if (response.status !== 200)
            throw new Error("Internal Server Error Try again !");

          const data = await response.json();

          let { products } = data.data;

          products = products.map((products) => {
            return {
              id: products.id,
              title: products.title,
              description: products.description,
              externalLink: products.external_link,
              isFree: products.free,
              bgColor: products.gradient_1,
              illustration: products.illustration,
              logo: products.logo,
              offer: products.offer,
              offerPrice: products.offer_price,
              offerText: products.offer_validity_text,
              price: products.price,
              priceText: products.price_validity_text,
              productId: products.product_id,
              Ratings: products.rating,
              redirectionUrl: products.redirection_url,
            };
          });
          dispatch({ type: "product", payload: products });
        } catch (error) {
          alert(error);
        } finally {
          dispatch({ type: "loading", payload: false });
        }
      }

      if (query !== "") {
        fetchProducts();
      }

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  useEffect(
    function () {
      const controller = new AbortController();
      dispatch({ type: "loading", payload: true });
      dispatch({ type: "searchQuery", payload: "" });
      async function fetchFilterProducts() {
        try {
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Token":
                "eyJhbGciOiJIUzUxMiIsImlhdCI6MTYwODEwMDI4MCwiZXhwIjoxNjE1ODc2MjgwfQ.eyJ0eXBlIjozLCJpZCI6MTQ5MzMsImNyZWF0ZWQiOiIyMDIwLTEyLTE2IDA2OjMxOjIwLjczMTk2NiJ9.Ef001xBUX_ZPsgvGWCou9sUa6Q2BV9jvPWZZsnwE8qB3_IDTGaSNV0d0lmcuWab2FwEUQ3GouA9LVdd7ExmkvQ",
            },
            body: JSON.stringify({
              page_num: selectedPage,
              filter_id: developedBy === 0 ? null : developedBy,
              segment_id: null,
              price_type: selectedPrice === 0 ? null : selectedPrice,
              rating_by: selectedRating === 0 ? null : selectedRating,
              application_type: selectedAppType === 0 ? null : selectedAppType,
              min_price_limit: 0,
              max_price_limit: 29500000,
              min_investment_limit: 0,
              max_investment_limit: 100000000,
              sort_by: selectedSort,
            }),
          };

          const response = await fetch(
            "https://18ebbuf8l8.execute-api.ap-south-1.amazonaws.com/demo/api/v3/user/marketplace/filter",
            options,
            { signal: controller.signal }
          );

          if (response.status !== 200)
            throw new Error("Internal Server Error try again !");

          const data = await response.json();

          let { products } = data.data;

          products = products.map((products) => {
            return {
              id: products.id,
              title: products.title,
              description: products.description,
              externalLink: products.external_link,
              isFree: products.free,
              bgColor: products.gradient_1,
              illustration: products.illustration,
              logo: products.logo,
              offer: products.offer,
              offerPrice: products.offer_price,
              offerText: products.offer_validity_text,
              price: products.price,
              priceText: products.price_validity_text,
              productId: products.product_id,
              productName: products.product_name,
              Ratings: products.rating,
              redirectionUrl: products.redirection_url,
              createdBy: products.created_by,
            };
          });

          dispatch({ type: "product", payload: products });
        } catch (error) {
          alert(error);
        } finally {
          dispatch({ type: "loading", payload: false });
        }
      }

      fetchFilterProducts();

      return function () {
        controller.abort();
      };
    },
    [
      selectedSort,
      developedBy,
      selectedRating,
      selectedPrice,
      selectedAppType,
      selectedPage,
    ]
  );

  return (
    <ProductContext.Provider
      value={{
        query,
        selectedSort,
        developedBy,
        selectedRating,
        selectedPrice,
        selectedAppType,
        selectedPage,
        isLoading,
        productsList,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
