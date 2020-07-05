import React from 'react'
import Bighero2 from './Bighero2'
import Card2 from './Card2'

var items = []

class SecondPage extends React.Component {
   render(){
    return(
        <React.Fragment>
            <Bighero2/>
            <div className="container-fluid">
                <div className="row">
                <Card2 title ="¿EN QUE CONSISTE?"  text="El juego se asemeja al fútbol, pero utilizando vehículos en lugar de jugadores y una pelota de gran tamaño. En los partidos pueden participar desde 1 vs 1 hasta 4 vs 4 jugadores distribuidos en dos equipos, naranja y azul. Cada vehículo puede utilizar propulsión extra, tanto para acelerar como para desplazarse por el aire, siendo esta una característica fundamental del juego. Dicha propulsión puede recargarse mediante dots distribuidos en el campo de juego y que reaparecen continuamente. Los partidos duran 5 minutos, disputándose un tiempo extra indefinido en caso de empate.

A medida que el usuario vaya ganando experiencia se le aumentará el nivel."/>
                <img src ="https://www.muylinux.com/wp-content/uploads/2020/01/Rocket-League.jpg"  alt="LAND" width="500" HSPACE="10" VSPACE="10" > 
                </img>
                <Card2 title ="DESARROLLO Y LANZAMIENTO" text="El 19 de febrero de 2014, Psyonix confirmó que se lanzaría una secuela de Supersonic Acrobatic Rocket-Powered Battle-Cars con el nombre de Rocket League. Contó anteriormente con una fase de pruebas para PC y luego para PlayStation 4 en el mes de abril.

El 3 de junio, Psyonix anunció la fecha de lanzamiento PS4 y PC (a través de la plataforma Steam e inicialmente sólo para Microsoft Windows, con posibles versiones compatibles con Mac y Linux) que sería el 7 de julio. Se reveló también un vehículo exclusivo, el Sweet Tooth (de la serie Twisted Metal) para usuarios de PS4. Rocket League se ha incluido en la Instant Game Collection de PS4 para Norteamérica y regiones de Oceanía y Europa. El juego fue lanzado en Xbox One el 17 de febrero de 2016, incluyendo vehículos exclusivos como el Warthog de la saga Halo y el Armadillo de Gears of War.  "/>
                <img src ="https://images.dexerto.es/uploads/2020/06/09130844/rocket-league-vodafone-giants.jpg"  alt="JEPP" width="500" HSPACE="10" VSPACE="10"> 
                </img>
               
                </div>

            </div>
        </React.Fragment>

    )
   }

   componentWillMount(){
       items = []
       for(let i = 0; i < 3; i++)
       items.push(<Card2/>)
   }
}

export default SecondPage;