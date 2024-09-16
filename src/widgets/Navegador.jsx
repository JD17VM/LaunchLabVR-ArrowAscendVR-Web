import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { useState, useEffect } from "react"


import styles from '../assets/styles/estilos_navegador.module.css'

import imageHelper from '../utils/imageHelper'

const pageData = [
    {
        enlace_logo_proyecto: imageHelper.Logo_LaunchLab,
        enlace_index: "/",
        enlace_documentos: "/documentos",
        enlace_proceso: "/proceso",
        enlace_nosotros: "/nosotros",
        enlace_proyectos: "/proyectos",
    },
    {
        enlace_logo_proyecto: imageHelper.Logo_ArrowAscend_fondo_negro,
        enlace_index: "/index2",
        enlace_index: "/index2",
        enlace_documentos: "/documentos2",
        enlace_proceso: "/proceso2",
        enlace_nosotros: "/nosotros2",
        enlace_proyectos: "/proyectos2",
    },
];

export function Navegador() {
    const location = useLocation();

    const [activeLink, setActiveLink] = useState('');

    let pageDataToUse;

    switch (location.pathname) {
        case '/':
        case '/index':
        case '/documentos':
        case '/nosotros':
        case '/proceso':
        case '/proyectos':
            pageDataToUse = pageData[0];
            document.body.classList.remove('bg_AA');
            document.body.classList.add('bg_LL');
            break;
        
        case '/index2':
        case '/documentos2':
        case '/nosotros2':
        case '/proceso2':
        case '/proyectos2':
            pageDataToUse = pageData[1];
            document.body.classList.remove('bg_LL');
            document.body.classList.add('bg_AA');
            break;
        default:
            if (location.pathname.startsWith('/documentos2')) { // Usa location.pathname
                pageDataToUse = pageData[1];
                document.body.classList.remove('bg_LL');
                document.body.classList.add('bg_AA');
                break;
            } else if (location.pathname.startsWith('/documentos')) {
                pageDataToUse = pageData[0];
                document.body.classList.remove('bg_AA');
                document.body.classList.add('bg_LL');
                break;
            }
            else {
                pageDataToUse = pageData[0];
            }
    }

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);


    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > 80) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]); 


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <>
            <nav id="navbar" className={scrolling ? styles['reducida'] : ''}>
                <div className={styles.cont_logos}>
                    <div className={styles.cont_logo_general}>
                        <img src={imageHelper.Logo_IHC_normal} alt="" />
                    </div>
                    <div className={styles.division}></div>
                    <Link to={pageDataToUse.enlace_index} className={styles.cont_logo_uno}>
                        <img src={pageDataToUse.enlace_logo_proyecto} alt="" />
                    </Link>
                </div>

                <button onClick={toggleMenu}>
                    <span className='material-symbols-outlined'>
                        menu
                    </span>
                </button>
                <ul className={`${isOpen ? styles.menu_visible : styles.menu_hidden} ${scrolling ? styles['reducida_ul'] : ''}`}>
                    <li><Link to={pageDataToUse.enlace_documentos} className={activeLink === '/index' || activeLink === '/index' ? styles['active'] : ''}>Inicio</Link></li>
                    <li><Link to={pageDataToUse.enlace_documentos} className={activeLink === '/documentos' || activeLink === '/documentos2' ? styles['active'] : ''}>Documentos</Link></li>
                    <li><Link to={pageDataToUse.enlace_proceso} className={activeLink === '/proceso' || activeLink === '/proceso2' ? styles['active'] : ''}>Proceso</Link></li>
                    <li><Link to={pageDataToUse.enlace_nosotros} className={activeLink === '/nosotros' || activeLink === '/nosotros2' ? styles['active'] : ''}>Nosotros</Link></li>
                    <li><Link to={pageDataToUse.enlace_proyectos} className={activeLink === '/proyectos' || activeLink === '/proyectos2' ? styles['active'] : ''}>Proyectos</Link></li>
                </ul> 
            </nav>
            <div className={styles.espacio_nav}></div>
        </>
    )
}