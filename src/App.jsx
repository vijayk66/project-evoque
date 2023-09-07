import React, { Suspense, lazy } from "react";

const Navbar = lazy(() => import("./components/NavbarComponents/Navbar"));
const HeroImg = lazy(() => import("./components/NavbarComponents/HeroImg"));
const Main = lazy(() => import("./components/MainComponents/Main"));
const Footer = lazy(() => import("./components/FooterComponents/Footer"));
const ProductProvider = lazy(() =>
  import("./components/customContext/ProductContext")
);
const Spinner = lazy(() => import("./components/customComponents/Spinner"));

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
