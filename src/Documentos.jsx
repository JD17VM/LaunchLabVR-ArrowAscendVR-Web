import { useLocation } from 'react-router-dom';

import { Cabecera } from './widgets/Cabecera'
import { Seccion } from './widgets/Seccion_Docs/Seccion'

import styles from './assets/styles/estilos_documento.module.css'
import { useEffect } from 'react';
import pageData from './data/documentos';

import imageHelper from './utils/imageHelper'

export function Documentos() {

    useEffect(() => {
        document.title = "Documentos";
      }, []);

    const location = useLocation();

    let pageDataToUse;
    if (location.pathname === '/documentos') {
        pageDataToUse = pageData[0];  
    } else if (location.pathname === '/documentos2') {
        pageDataToUse = pageData[1];
    } else {
        pageDataToUse = { titulo: "Error", contenido: <p>Página no encontrada</p> };
    }
    return (
    <>
        <Cabecera background_image={imageHelper.background_cabecera_documentos}>Documentos</Cabecera>

        <div className={styles.contenido}>
            {
                pageDataToUse.map(({ titulo, archivos, id_seccion }) => (
                    <Seccion key={id_seccion} id_seccion={id_seccion} props={archivos}>{titulo}</Seccion>
                ))
            }
        </div>
    </>
)

}
