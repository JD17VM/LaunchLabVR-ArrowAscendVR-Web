import '../assets/styles/estilos_cabeceras.css'

export function Cabecera ({children, background_image}){
    return(
        <div className="cabecera" style={{ backgroundImage: `url('${background_image}')` }}>
            <div className="overlay"></div>
            <h1>{children}</h1>
        </div>
    )
}