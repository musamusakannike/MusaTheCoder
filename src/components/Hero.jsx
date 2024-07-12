

const Hero = () => {
  return (
    <header className="bg-secondary-green container-fluid pt-5 px-3">
      <div>
        <h1 className="display-1 fw-bold text-green pt-5 pb-3 mt-5 animate__animated animate__fadeInUp">Musa Musa <br />Kannike</h1>
      </div>
      <div className="my-2">
        <div className="border-green" style={{borderBottom: '1px solid'}}></div>
      </div>
      <div className="mt-4 mb-5">
        <img src="assets/img/hero.png" alt="Musa Musa Kannike" className="w-100 animate__animated animate__zoomIn" />
      </div>
    </header>
  )
}

export default Hero