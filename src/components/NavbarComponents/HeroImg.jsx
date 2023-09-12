
function HeroImg() {
  return (
    <div className="hero-img w-100 position-relative mt-4 mb-5 heroContainer rounded-4">
      <img
        className="w-100 h-100"
        src="/assets/hero-img.png"
        alt="hero-img"
      />
      <div
        className="pt-5 position-absolute top-50 start-50 translate-middle text-center text-white"
    
      >
        <h1 className="fs-1 fw-lighter mb-4 heading text-nowrap">
          Welcome to <span className="fw-bold">marketplace!</span>
        </h1>
        <p className="fs-4 mb-0 text-nowrap">
          India&apos;s first products marketplace with
        </p>
        <p className="fs-4 text-wrap">
          advanced tools & apps to empower your every trade!
        </p>
      </div>

    </div>
  );
}

export default HeroImg;
