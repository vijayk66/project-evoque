import { useContext, useRef } from "react";
import { ProductContext } from "../customContext/ProductContext";

function Pagination() {
  const { selectedPage, dispatch } = useContext(ProductContext);
  const pages = useRef();

  const handlePage = (pageNum) => {
    dispatch({ type: "page", payload: pageNum });
  };

  const movePrev = () => {
    if (selectedPage >= 2) handlePage(selectedPage - 1);
    if (selectedPage > 3) {
      pages.current.style.transform = `translateX(-${selectedPage * 20}px`;
    }
    if (selectedPage <= 3 && selectedPage > 1) {
      pages.current.style.transform = `translateX(-${selectedPage * 2}px`;
    }
  };

  const moveNext = () => {
    if (selectedPage < 10) handlePage(selectedPage + 1);
    if (selectedPage >= 5 && selectedPage < 10)
      pages.current.style.transform = `translateX(-${selectedPage * 30}px`;
  };

  return (
    <ul className="pagination my-5 fs-4 d-flex gap-3 align-items-center justify-content-center col-12">
      <li
        className={`page-item  fs-1 ${selectedPage === 1 ? "cursor" : ""}`}
        onClick={movePrev}
      >
        &lt;
      </li>

      <div className="pages px-2 ">
        <div className="d-flex gap-3 align-items-center" ref={pages}>
          <li
            className={`page-item px-4 py-2 rounded-circle ${
              selectedPage === 1 ? "activePage" : ""
            }`}
            onClick={() => handlePage(1)}
          >
            1
          </li>

          <li
            className={`page-item px-4 py-2 rounded-circle ${
              selectedPage === 2 ? "activePage" : ""
            }`}
            onClick={() => handlePage(2)}
          >
            2
          </li>

          <li
            className={`page-item px-4 py-2 rounded-circle ${
              selectedPage === 3 ? "activePage" : ""
            }`}
            onClick={() => handlePage(3)}
          >
            3
          </li>

          <li
            className={`page-item px-4 py-2 rounded-circle ${
              selectedPage === 4 ? "activePage" : ""
            }`}
            onClick={() => handlePage(4)}
          >
            4
          </li>

          <li
            className={`page-item px-4 py-2 rounded-circle ${
              selectedPage === 5 ? "activePage" : ""
            }`}
            onClick={() => handlePage(5)}
          >
            5
          </li>
          <li
            className={`page-item px-4 py-2 rounded-circle ${
              selectedPage === 6 ? "activePage" : ""
            }`}
            onClick={() => handlePage(6)}
          >
            6
          </li>
          <li
            className={`page-item px-4 py-2 rounded-circle ${
              selectedPage === 7 ? "activePage" : ""
            }`}
            onClick={() => handlePage(7)}
          >
            7
          </li>
          <li
            className={`page-item px-4 py-2 rounded-circle ${
              selectedPage === 8 ? "activePage" : ""
            }`}
            onClick={() => handlePage(8)}
          >
            8
          </li>
          <li
            className={`page-item px-4 py-2 rounded-circle ${
              selectedPage === 9 ? "activePage" : ""
            }`}
            onClick={() => handlePage(9)}
          >
            9
          </li>
          <li
            className={`page-item px-4 py-2 rounded-circle ${
              selectedPage === 10 ? "activePage" : ""
            }`}
            onClick={() => handlePage(10)}
          >
            10
          </li>
        </div>
      </div>

      <li
        className={`page-item  fs-1 ${selectedPage === 10 ? "cursor" : ""}`}
        onClick={moveNext}
      >
        &gt;
      </li>
    </ul>
  );
}

export default Pagination;
