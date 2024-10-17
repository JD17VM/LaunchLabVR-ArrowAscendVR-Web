import React from "react";
import { useParams } from "react-router-dom";

import { useLocation } from 'react-router-dom';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import styles from './assets/styles/estilos_item_page.module.css'

import pageData from './data/documentos';
import { useEffect } from 'react';


const ItemPage = () => {
  const { id_seccion, id } = useParams();

  
  const location = useLocation(); // Usa el hook useLocation
  console.log("location.pathname:", location.pathname);
  let pageDataToUse;
  let enlace_principal;
  if (location.pathname.startsWith('/documentos2')) { // Usa location.pathname
    pageDataToUse = pageData[1];  
    enlace_principal = '/documentos2';
  } else if (location.pathname.startsWith('/documentos')) {
    pageDataToUse = pageData[0];
    enlace_principal = '/documentos';
  } else {
    // Manejar rutas no encontradas
    pageDataToUse = { titulo: "Error", contenido: <p>Página no encontrada</p> };
  }
  
  console.log('pageDataToUse:', pageDataToUse);
  
  const seccion = pageDataToUse.find(seccion => seccion.id_seccion == id_seccion);
  console.log(seccion)
  

  const archivo = seccion?.archivos.find((archivo) => archivo.id == id);
  
  if (!archivo) {
    console.log(`No se encontró un archivo con id ${id} en la sección ${id_seccion}.`);
  } else {
    console.log("Archivo encontrado:", archivo);
  }

  const currentIndex = seccion?.archivos.findIndex((archivo) => archivo.id == id);
  const prevEnabled = currentIndex > 0;
  const nextEnabled = currentIndex < seccion?.archivos.length - 1;
  
  let content;

  if (archivo.tipo === "imagen") {
    content = <img src={`https://raw.githubusercontent.com/JD17VM/LaunchLab/refs/heads/main/projects/IHC/src/assets/imgs/Imagenes_Documentos/${archivo.enlace_doc}`} alt="Descripción de la imagen" />;
  } else if (archivo.tipo === "pdf"){
    content = <iframe src={`https://drive.google.com/file/d/${archivo.enlace_doc}/preview`}  allow="autoplay" className={styles.iframe_pdf_drive}></iframe>;
  } else if (archivo.tipo === "video"){
    content = <iframe src={`https://drive.google.com/file/d/${archivo.enlace_doc}/preview`}  allow="autoplay" className={styles.iframe_video_drive}></iframe>;
  }

  useEffect(() => {
    document.title = seccion.titulo;
  }, []);

  return (
    <div className={styles.contenedor}>
      <h1>{seccion.titulo} - {archivo.nombre}</h1>
      <div>
        <Link 
        to={`${enlace_principal}/${id_seccion}/${parseInt(id) - 1}`} 
        className={styles.boton}
        style={{ visibility: prevEnabled ? "visible" : "hidden" }}
        >
          <span className="material-symbols-outlined" style={{marginLeft: "0.6rem"}}>
            arrow_back_ios
          </span>
        </Link>

        <div className={styles.documento_especifico}>
          {content}
        </div>

        <Link 
        to={`${enlace_principal}/${id_seccion}/${parseInt(id) + 1}`} 
        className={styles.boton}
        style={{ visibility: nextEnabled ? "visible" : "hidden" }}
        >
          <span className="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ItemPage;
