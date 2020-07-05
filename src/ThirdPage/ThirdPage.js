import React from 'react'
import Bighero3 from './Bighero3'
import Card3 from './Card3'

var items = []

class ThirdPage extends React.Component {
   render(){
    return(
        <React.Fragment>
            <Bighero3/>
            <div className="container-fluid">
                <div className="row">
                <Card3 title ="¿EN QUE CONSISTE?"  text="El juego se desarrolla en el reino de Hyrule. Un joven llamado Link se embarca en una búsqueda para evitar que el malvado Ganondorf, el antagonista principal de saga de Zelda, obtenga la legendaria Trifuerza, una reliquia mágica de poder omnipotente, un evento predicho por la profecía Princesa Zelda. Debido a las circunstancias imprevistas, Ganondorf obtiene con éxito parte de la Trifuerza. Al viajar adelante y atrás en el tiempo utilizando la mítica Espada Maestra, Link debe reunir los seis medallones necesarios para derrotar a Ganondorf y restaurar la paz a Hyrule. "/>
                <img src ="https://i.blogs.es/024bc9/8605c83f228434eb1ac6ad24d31edd87/1366_2000.jpeg" width="500" alt="JAGUAR" HSPACE="10" VSPACE="10"> 
                </img>
                <Card3 title ="DESARROLLO" text="The Legend of Zelda: Ocarina of Time (ぜるだ の でんせつ とき の おかりな, Zeruda no Densetsu Toki no Okarina ?, The Legend of Zelda Ocarina of Time (Hylian) en Hylian) es la quinta entrega de saga The Legend of Zelda, desarrollado por Nintendo Entertainment Analysis and Development,  coodesarrollado por Grezzo, y publicado por Nintendo para la Nintendo 64. El primer juego con gráficos 3D de la serie, el motor básico y modo de juego se utilizaron posteriormente en futuras entregas, incluyendo su secuela, The Legend of Zelda: Majora's Mask. El juego comenzó una tradición en la saga de Zelda, un elemento importante o persona del juego aparece en el título del juego."/>
                <img src ="https://i.blogs.es/b4246c/screenshot_390/1366_2000.jpeg" width="500" alt="JAGUAR" HSPACE="10" VSPACE="10"> 
                </img>
                <Card3 title ="CRITICA" text="Ocarina of Time ha disfrutado de una amplia aclamación crítica y éxito comercial. Ha vendido más de 7,6 millones de copias, y fue el juego más vendido en 1998 a pesar de su lanzamiento en noviembre. También recibió una puntuación perfecta de numerosas publicaciones de los medios de comunicación, y a llegado a ponerse muy arriba en las listas de los mejores juegos de todos los tiempos incluidos los de Gamespot, IGN y la revista Nintendo Power." />
                <img src ="https://www.alfabetajuega.com/wp-content/uploads/2019/05/ocarina-of-time-link-saria.png" width="500" alt="JAGUAR" HSPACE="10" VSPACE="10"> 
                </img>
                </div>

            </div>
        </React.Fragment>

    )
   }
   
   componentWillMount(){
    items = []
    for(let i = 0; i < 3; i++)
    items.push(<Card3/>)
}
}

export default ThirdPage;