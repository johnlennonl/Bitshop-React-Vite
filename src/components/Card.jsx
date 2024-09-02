import React from 'react';
import Swal from 'sweetalert2';

const ProductCard = ({ producto }) => {
  const { nombre, imagen, precio, talla, descripcion, botonTexto } = producto;

  const handleBuyNowClick = () => {
    Swal.fire({
      title: '¿Quieres información de este producto?',
      text: `Producto: ${nombre} \nPrecio: $${precio}`,
      imageUrl: 'img/shop.png',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Imagen del producto',
      showCancelButton: true,
      confirmButtonText: 'Contactar',
      cancelButtonText: 'Volver',
      confirmButtonColor: '#111',
      cancelButtonColor: 'gray',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = `https://wa.me/584126581304?text=Quiero%20este%20producto:%20${nombre}`;
      }
    });
  };

  return (
    <div className="col-md-4" data-aos="fade-up"> {/* Añade el atributo data-aos aquí */}
      <div className="card mb-4 box-shadow mx-auto cardShop">
        <img className="card-img-top" src={imagen} alt={nombre} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text descriptionProcducto">{descripcion}</p>
          <p className="talla"> Talla: {talla} </p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn cartBtn" onClick={handleBuyNowClick}>
              {botonTexto}
            </button>
            <small className="text-muted precioProducto">${precio}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;