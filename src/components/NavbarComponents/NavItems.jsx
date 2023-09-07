import { useReducer } from "react";

const initialState = {
  isActive1: false,
  isActive2: false,
  isActive3: false,
  isActive4: false,
  isActive5: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 1:
      return { ...initialState, isActive1: true };
    case 2:
      return { ...initialState, isActive2: true };
    case 3:
      return { ...initialState, isActive3: true };
    case 4:
      return { ...initialState, isActive4: true };
  }
}

function NavItems() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isActive1, isActive2, isActive3, isActive4 } = state;

  function handleClick(e, num) {
    e.preventDefault();
    dispatch({ type: num });
  }

  return (
    <div className="collapse navbar-collapse" id="navbarItems">
      <ul className="navbar-nav fs-4 d-flex flex-md-row flex-sm-column justify-content-between gap-md-3 gap-lg-5 gap-sm-2 cursorPointer mx-auto">
        <li className="nav-item fw-semibold">
          <a
            className={isActive1 ? "nav-link activeNavItem" : "nav-link"}
            onClick={(e) => handleClick(e, 1)}
          >
            About
          </a>
        </li>
        <li className="nav-item fw-semibold">
          <a
            className={isActive2 ? "nav-link activeNavItem" : "nav-link"}
            onClick={(e) => handleClick(e, 2)}
          >
            Marketplace
          </a>
        </li>
        <li className="nav-item fw-semibold">
          <a
            className={isActive3 ? "nav-link activeNavItem" : "nav-link"}
            onClick={(e) => handleClick(e, 3)}
          >
            Resources
          </a>
        </li>
        <li className="nav-item fw-semibold">
          <a
            className={isActive4 ? "nav-link activeNavItem" : "nav-link"}
            onClick={(e) => handleClick(e, 4)}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavItems;
