import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const WelcomeMessage = () => {
  useEffect(() => {
    const mostrarMensajeBienvenida = () => {
      Swal.fire({
        title: '¡Bienvenidos!',
        imageUrl: '/img/logoBlack.png', // Asegúrate de que la ruta sea correcta
        imageWidth: 230,
        imageHeight: 170,
        imageAlt: 'Imagen del producto',
        text: '¡Estás en el lugar correcto! En Bitshop Venezuela encontrarás prendas de calidad y diseño para cualquier ocasión. ¡Renueva tu armario hoy mismo!',
        confirmButtonText: '¡Empezar a explorar!',
        confirmButtonColor: '#111',
        textColor: '#111',
        textFontSize: '16px',
        textFontFamily: 'Poppins',
        customclassName: {
          popup: 'custom-swal',
          confirmButton: 'custom-swal-button',
          title: 'custom-swal-text'
        }
      });

      // Almacenar en localStorage para no mostrar el mensaje nuevamente
      localStorage.setItem('mensajeBienvenidaMostrado', 'true');
    };

    // Verificar si el mensaje ya se mostró
    if (!localStorage.getItem('mensajeBienvenidaMostrado')) {
      mostrarMensajeBienvenida();
    }
  }, []);

  return null; // Este componente no necesita renderizar nada en el DOM
};

export default WelcomeMessage;
