import React from 'react';

const Header = () => {
  return (
    <>
      <div className="contenedorLogo bg-black d-flex justify-content-between">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img src="img/bitshop (1).png" alt="Logotipo" classNameName="logotipo" />
          </a>
        </div>
        <div className="d-flex justify-content-end">
          <button id="btn-instagram" className="btnNavContacto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              {/* SVG path aquí */}
            </svg>
            <span>Instagram</span>
          </button>
        </div>
      </div>

      <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="ratio ratio-16x9">
                <video 
                  autoPlay 
                  muted 
                  playsInline 
                  loop 
                  src="/img/Nike Parkour Commercial _ Just Do It.mp4"
                  className="videoAdidasBanner"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      
<main>
   <div class="container-fluid text-center ">
    <div class="header mt-2  ">
        <h1 class="title">UN NUEVO NIVEL.</h1>
        <h1 class="title">UN NUEVO MUNDO.</h1>
        <p class="subtitle">Descubre la nueva colección y alcanza tus metas.</p> 
        
      </div>
   </div>
</main>



    </>
  );
};

export default Header;

