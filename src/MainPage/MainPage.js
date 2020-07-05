import React from 'react'

import Bighero from './Bighero'
import Card from './Card'


var items = []

class MainPage extends React.Component {
   render(){
    return(
        <React.Fragment>
            <Bighero/>
            <div className="container-fluid">
                <div className="row">
                <Card title ="HISTORIA DE LOS VIDEOJUEGOS"  text="Los orígenes del videojuego se remontan a la década de 1950, cuando poco después de la aparición de las primeras computadoras electrónicas tras el fin de la Segunda Guerra Mundial, se llevaron a cabo los primeros intentos por implementar programas de carácter lúdico. Así, fueron creados el Nim (1951) o el Oxo (1952), juegos electrónicos pero que aún no son realmente videojuegos, y el Tennis for Two (1958) o el Spacewar! (1962), auténticos pioneros del género. Todos ellos eran todavía prototipos, juegos muy simples y de carácter experimental que no llegaron a comercializarse, entre otras cosas, porque funcionaban en unas máquinas que solo estaban disponibles en universidades o en institutos de investigación."/>
                <img src ="https://www.muycomputer.com/wp-content/uploads/2013/12/Consolas.jpg"  alt="ASTON" width="500" HSPACE="10" VSPACE="10"> 
                </img>
                <Card title ="¿QUE SON LOS VIDEOJUEGOS?" text="Los videojuegos se diferencian de otras formas de entretenimiento, como ser las películas, en que deben ser interactivos; en otras palabras, los usuarios deben involucrarse activamente con el contenido. Para ello, es necesario utilizar un mando (también conocido como gamepad o joystick), mediante el cual se envían órdenes al dispositivo principal (un ordenador o una consola especializada) y estas se ven reflejadas en una pantalla con el movimiento y las acciones de los personajes."/>
                <img src ="https://educayjuega.files.wordpress.com/2017/04/videojuegos-lista-time-1.jpg?w=768" width="500" alt="BMW M8" HSPACE="10" VSPACE="10"> 
                </img>
                </div>

            </div>
        </React.Fragment>

    )
   }

   componentWillMount(){
       items = []
       for(let i = 0; i < 3; i++)
       items.push(<Card/>)
   }
}

export default MainPage;