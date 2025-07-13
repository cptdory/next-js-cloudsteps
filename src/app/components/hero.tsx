export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl  font-bold sm:text-5xl md:max-w-4xl md:text-6xl lg:text-7xl">Elevate Your Business</h1>
          <p className="mb-5 font-medium leading-relaxed tracking-wide text-gray-400">
            Empowering your growth with smart, reliable solutions—crafted to streamline operations and drive digital success.
          </p>
          <button className="btn btn-warning">Learn More</button>
        </div>
      </div>
    </div>
  );
}
