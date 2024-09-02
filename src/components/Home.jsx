import React from 'react';
import productos from './Products'; // Asegúrate de que la ruta sea correcta
import Card from './Card';


const Home = () => {
    return (
       <div className='m-4'>
         <div className="container ">
            <div className="row">
                {productos.map((producto, index) => (
                    <Card key={index} producto={producto} />
                ))}
            </div>
        </div>
       </div>
    );
};

export default Home;
