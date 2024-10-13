import { Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import styles from '../../assets/styles/estilos_documento.module.css'

import imageHelper from '../../utils/imageHelper'

export function Contenido_Archivo ({children, img, enlace_doc, id, id_seccion, tipo}){
    const location = useLocation(); // Usa el hook useLocation
    console.log("location.pathname:", location.pathname);

    let tipoFondo;
    let tipoTexto = "n";
    let img_default;

    if (tipo === "pdf"){
        tipoFondo = styles.tipoPDF;
        tipoTexto = "PDF";
        img_default = imageHelper.default_PDF
    } else if (tipo === "imagen"){
        tipoFondo = styles.tipoImagen
        tipoTexto = "IMG"
        img_default = imageHelper.default_Image
    } else if (tipo === "video"){
        tipoFondo = styles.tipoVideo
        tipoTexto = "VID"
        img_default = imageHelper.default_Video
    }

    if(!img){
        img = img_default;
    }else{
        img = `https://raw.githubusercontent.com/JD17VM/LaunchLab/refs/heads/main/projects/IHC/src/assets/imgs/Imagenes_Documentos/${img}`
    }

    return(
        <Link to={`${location.pathname}/${id_seccion}/${id}`} className={styles.cont_archivo}>
            <img 
                src={img} 
                alt={children} 
            />
            <p>{children}</p>
            <div className={tipoFondo}>
                <p>{tipoTexto}</p>
            </div>
        </Link>
    )
}