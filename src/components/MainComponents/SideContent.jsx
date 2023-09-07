import Search from "./Search";
import DevelopedBy from "./DevelopedBy";
import Rating from "./Rating";
import ApplicationType from "./ApplicationType";
import PriceType from "./PriceType";

function SideContent() {
  return (
    <div
      className="d-flex flex-row flex-lg-column flex-wrap
    gap-5 mb-5"
    >
      <Search />
      <DevelopedBy />
      <Rating />
      <PriceType />
      <ApplicationType />
    </div>
  );
}

export default SideContent;
