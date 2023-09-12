import React, { Suspense, lazy} from "react";

const Navbar = lazy(() => import("./components/NavbarComponents/Navbar"));
const HeroImg = lazy(() => import("./components/NavbarComponents/HeroImg"));
const Main = lazy(() => import("./components/MainComponents/Main"));
const Footer = lazy(() => import("./components/FooterComponents/Footer"));
const ProductProvider = lazy(() =>
  import("./components/customContext/ProductContext")
);
const Spinner = lazy(() => import("./components/customComponents/Spinner"));


// import Spinner from "./components/customComponents/Spinner";
// import Navbar from "./components/NavbarComponents/Navbar";
// import HeroImg from "./components/NavbarComponents/HeroImg";
// import Main from "./components/MainComponents/Main";
// import Footer from "./components/FooterComponents/Footer";
// import ProductProvider from "./components/customContext/ProductContext";

function App() {
  return (
    <React.Fragment>
      <div className="container shadow pt-3 px-4 mx-auto text-align-center overflow-hidden">
        <Suspense fallback={<Spinner />}>
          <ProductProvider>
            <Navbar />
            <HeroImg />
            <Main />
            <Footer />
          </ProductProvider>
        </Suspense>
      </div>
    </React.Fragment>
  );
}

export default App;
