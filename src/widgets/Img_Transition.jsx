import React, { useState, useEffect } from "react";

export function Img_Transition({images}) {

    const [currentIndex, setCurrentIndex] = useState(0); // Índice de la imagen actual
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        // Intervalo para cambiar la imagen
        const interval = setInterval(() => {
            setOpacity(0); // Inicia la transición de desvanecimiento
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setOpacity(1); // Restablece la opacidad
            }, 1000); // El tiempo debe coincidir con la duración de la transición (1s)
        }, 5000); // Cambiar imagen cada 5 segundos

        return () => clearInterval(interval);
    }, [images]);

    return (
        <img
            src={images[currentIndex]}
            alt={`Imagen ${currentIndex + 1}`}
            style={{
                transition: "opacity 1s ease-in-out",
                opacity: opacity, 
            }}
        />
    );
}
