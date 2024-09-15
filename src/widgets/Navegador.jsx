import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { useState, useEffect } from "react"


import '../assets/styles/normalize.css'
import '../assets/styles/estilos_generales.css'
import styles from '../assets/styles/estilos_navegador.module.css'

import imageHelper from '../utils/imageHelper'

const pageData = [
    {
        enlace_logo_proyecto: imageHelper.Logo_LaunchLab,
        enlace_index: "/",
    },
    {
        enlace_logo_proyecto: imageHelper.Logo_ArrowAscend_fondo_negro,
        enlace_index: "/index2",
    },
];

export function Navegador() {
    const location = useLocation();

    const [activeLink, setActiveLink] = useState('');

    let pageDataToUse;

    switch (location.pathname) {
        case '/':
        case '/index':
            pageDataToUse = pageData[0];
            break;
        
        case '/index2':
            pageDataToUse = pageData[1];
            break;
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
                </ul> 
            </nav>
            <div className={styles.espacio_nav}></div>
        </>
    )
}