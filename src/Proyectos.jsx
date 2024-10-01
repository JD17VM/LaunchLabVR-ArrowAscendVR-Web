import { Cabecera } from './widgets/Cabecera'

import { Link } from 'react-router-dom';

import imageHelper from './utils/imageHelper'
import { useEffect } from 'react';
import styles from './assets/styles/estilos_proyectos.module.css'

export function Proyectos() {
    useEffect(() => {
        document.title = "Proyectos";
      }, []);
    return (
        <>
            <Cabecera background_image={imageHelper.background_cabecera_proyectos}>Proyectos</Cabecera>
            <div className={styles.contenido}>
                <div className={styles.seccion}>
                    <div className={styles.contenido_seccion}>
                        <Link to="/" className={styles.cont_archivo} >
                            <div style={{ backgroundImage: `url(${imageHelper.background_image_LL_proyecto})` }}>
                                <img src={imageHelper.Logo_LaunchLab} alt=""/>
                            </div>
                            <p>Launch Lab VR</p>
                        </Link>

                        <Link to="/index2" className={styles.cont_archivo} >
                            <div style={{ backgroundImage: `url(${imageHelper.background_image_AA_proyecto})` }}>
                                <img src={imageHelper.Logo_ArrowAscend_fondo_negro} alt=""/>
                            </div>
                            <p>Arrow Ascend</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}