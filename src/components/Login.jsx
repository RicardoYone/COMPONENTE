import logo from "../img/logo.jpg";
import logo2 from "../img/logo2.jpg";
import logo3 from "../img/logo3.jpg";
import logo4 from "../img/logo4.jpg";

import "../styles/Login.css"

const Login=()=>{

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
                        <h1>INICIAR CESION</h1>

                        <label for="username"> USUARIO</label>
                        <input type="text" placeholder="   NOMBRE DE USUARIO"/>

                        <label for="email">CORREO</label>
                        <input type="email" placeholder="    EMAIL"/>

                        <label for="password">CONTRASEÑA</label>
                        <input type="password" placeholder="    PASSWORD"/>

                        <button className="login" > LOGIN</button>
                        <button className="google">Iniciar con Google</button>

                        <div className="link">
                            <a href="">He olvidado  mi contraseña</a>
                            <br/>
                            <br/>
                            <a href="">Crear usuario</a>     
                        </div>
                    </form>
                </div>

            </div>
        </div>
        
    )
}

export default Login;













