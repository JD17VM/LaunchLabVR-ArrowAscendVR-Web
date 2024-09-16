import '../assets/styles/normalize.css'
import '../assets/styles/estilos_generales.css'
import styles from '../assets/styles/estilos_footer.module.css'

import imageHelper from '../utils/imageHelper'

export function Footer (){
    return(
        <footer>
            <div className={styles.contenedor_politicas}>
                <ul>
                    <li><a href="">Corporación</a></li>
                    <li><a href="">Privacidad</a></li>
                    <li><a href="">Ajustes de Cookies</a></li>
                    <li><a href="">Política de Cookies</a></li>
                    <li><a href="">Aviso Legal</a></li>
                </ul>
            </div>
            <div className={styles.contenedor_contacto}>
                <div>
                    <h3>Correo electrónico personal:</h3>
                    <ul>
                        <li>jdiegodiego4@gmail.com</li>
                        <li>emamanix@gmail.com</li>
                    </ul>

                    <h3>Correo electrónico institucional:</h3>
                    <ul>
                        <li>jvaldiviame@unsa.edu.pe</li>
                        <li>amamaniq@unsa.edu.pe</li>
                    </ul>
                </div>
            </div>
            <div className={styles.contenedor_redes_sociales}>
                <a href="" className={styles.cont_red_social}>
                    <img src={imageHelper.logoInstagramBlanco} alt=""/>
                    <p>/juandiegovaldiviamendoza</p>
                </a>
                <a href="" className={styles.cont_red_social}>
                    <img src={imageHelper.logoFacebookBlanco} alt=""/>
                    <p>/juandiegovaldiviamendoza</p>
                </a>
                <a href="" className={styles.cont_red_social}>
                    <img src={imageHelper.logoFacebookBlanco} alt=""/>
                    <p>/alexenriquemamani</p>
                </a>
                <a href="" className={styles.cont_red_social}>
                    <img src={imageHelper.logoWhatsappBlanco} alt=""/>
                    <p>whatsapp/922900787</p>
                </a>
                <a href="" className={styles.cont_red_social}>
                    <img src={imageHelper.logoWhatsappBlanco} alt=""/>
                    <p>whatsapp/925968311</p>
                </a>
            </div>
            <div className={styles.contenedor_logo_fecha}>
                <img src={imageHelper.logoUNSAFondoNegro} alt=""/>
                <img src={imageHelper.logoComputacionFondoNegro} alt=""/>
                <p>Arequipa - 2024</p>
            </div>
        </footer>
    )
}