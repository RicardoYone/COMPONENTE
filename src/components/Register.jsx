import logo from "../img/logo.jpg";
import logo2 from "../img/logo2.jpg";
import logo3 from "../img/logo3.jpg";
import logo4 from "../img/logo4.jpg";

import "../styles/Login.css"

const Register=()=>{

    return(
        <div className="fondo">

            <div className="padre">

                <div className="d-flex align-items-center color1">
                    <div className="fondo2 text-center">
                        <h1>SUPER MARKET PLACE</h1>
                        <h2>"Que facil es comprar, desde la comodidad de tu Hogar"</h2>

                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={logo} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item active">
                                    <img src={logo2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item active">
                                    <img src={logo3} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item active">
                                    <img src={logo4} className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="d-flex align-items-center color2">
                    <form>
                        <h1>CREAR CUENTA</h1>

                        <label for="username"> Nombre (como aparece en tu DNI)</label>
                        <input type="text" placeholder="   NOMBRES COMPLETOS"/>

                        <label for="username"> Apellido (como aparece en tu DNI)</label>
                        <input type="text" placeholder="   APELLIDOS COMPLETOS"/>

                        <label for="email">Correo</label>
                        <input type="email" placeholder="    EMAIL"/>

                        <label for="password">Contraseña</label>
                        <input type="password" placeholder="    PASSWORD"/>

                        <label for="username"> DNI</label>
                        <input type="number" placeholder="    XXXXXXXX"/>
                        
                        <div className="check d-flex ">
                            <input type="checkbox" />  
                            <label>Autorizo recibir comunicaciones promocionales y el uso de mi informacion para <span>fines adicionales.</span></label> 
                        </div>
                        
                        <div className="check d-flex ">
                            <input type="checkbox" />
                            <label>Declaro que he leido y acepto la nueva <span>Politica de Privacidad</span> y los <span>Terminos y Condiciones</span> de Linio.</label>
                        </div>
                        
                        <button className="login" >COMPLETAR REGISTRO</button>

                        <div className="link">
                            <h5>O Ingresa con</h5>
                            <button className="login" >FACEBOOCK</button>
                            <button className="google">Iniciar con Google</button>
                            <button className="apple" >APPLE</button>   
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Register;














