'use strict';

import React, { Component } from 'react';
import ImagePreview from './ImagePreview';
import axios from 'axios';
const ROOT_URL = "https://apiproyecto2web.herokuapp.com";
class App extends Component {

    constructor(props) {
        super(props);
        var max = 100;
        var min = -100;
        var xs = Math.random() * (max - min) + min;
        var ys = Math.random() * (max - min) + min;
        console.log("Si logueo")
        this.state = {
            imagenes: [],
            x: xs,
            y: ys,
            cant: 24,
            bus: "",

        };

        /**this.obtenerImagenesPosicion();*/
        this.organizar();

    }

    organizar(){

              var cont = 0;
              var contY = 0;

              for(cont =0;cont<100;cont++)
              {
                var contAux = 0;
                for(contAux=0;contAux<10;contAux++){


                  /**this.state.imagenes[cont].x=contAux;
                  this.state.imagenes[cont].y=contY;*/
                  contAux=contAux+1;
                  cont=cont+1;
                }
                contY=contY+1;
              }
    }

    obtenerImagesCriterio(cri) {
        {
            axios.get(ROOT_URL + "/imagenes/" + cri + "/" + this.state.cant)
                .then(response => {
                if (response.status === 200){
                    this.setState({
                        imagenes: response.data
                    });
                }
                else{
                    // Mensaje de error
                }
                })
        }
    }

    obtenerImagenesPosicion() {

        axios.get(ROOT_URL + "/imagenes/0/"+10)
            .then(response => {
            if (response.status === 200){
                this.setState({
                    imagenes: response.data,
                }, function() {
                    console.log(response.data);
                })
            });
            }
            else{
                // Mensaje de error
            }
    }

    // y asi con los demas metodos que involucren una petición REST
                  
    moverALaDerecha() {
        this.setState({
            x: this.state.x + 1
        }, function() {
            console.log(response.data);
        })


        axios.get(ROOT_URL + "/imagenes/0/"+4)
            .then(response => {
                this.setState({
                }, function() {

                  this.state.imagenes[0].url = this.state.imagenes[1].url;
                  this.state.imagenes[6].url = this.state.imagenes[7].url;
                  this.state.imagenes[12].url = this.state.imagenes[13].url;
                  this.state.imagenes[18].url = this.state.imagenes[19].url;

                  this.state.imagenes[1].url = this.state.imagenes[2].url;
                  this.state.imagenes[7].url = this.state.imagenes[8].url;
                  this.state.imagenes[13].url = this.state.imagenes[14].url;
                  this.state.imagenes[19].url = this.state.imagenes[20].url;

                  this.state.imagenes[2].url = this.state.imagenes[3].url;
                  this.state.imagenes[8].url = this.state.imagenes[9].url;
                  this.state.imagenes[14].url = this.state.imagenes[15].url;
                  this.state.imagenes[20].url = this.state.imagenes[21].url;

                  this.state.imagenes[3].url = this.state.imagenes[4].url;
                  this.state.imagenes[9].url = this.state.imagenes[10].url;
                  this.state.imagenes[15].url = this.state.imagenes[16].url;
                  this.state.imagenes[21].url = this.state.imagenes[22].url;

                  this.state.imagenes[4].url = this.state.imagenes[5].url;
                  this.state.imagenes[10].url = this.state.imagenes[11].url;
                  this.state.imagenes[16].url = this.state.imagenes[17].url;
                  this.state.imagenes[22].url = this.state.imagenes[23].url;


                  this.state.imagenes[5].url = response.data[0].url;
                  this.state.imagenes[11].url = response.data[1].url;
                  this.state.imagenes[17].url = response.data[2].url;
                  this.state.imagenes[23].url = response.data[3].url;

                  this.forceUpdate();
                    console.log(response.data);
                })
            });

        /**this.obtenerImagenesPosicion();*/

    }


    moverALaIzquierda() {
        this.setState({
            x: this.state.x - 1
        }, function() {
            console.log(response.data);
        })


        axios.get(ROOT_URL + "/imagenes/0/"+4)
            .then(response => {
                this.setState({
                }, function() {

                  this.state.imagenes[5].url = this.state.imagenes[4].url;
                  this.state.imagenes[11].url = this.state.imagenes[10].url;
                  this.state.imagenes[17].url = this.state.imagenes[16].url;
                  this.state.imagenes[23].url = this.state.imagenes[22].url;

                  this.state.imagenes[4].url = this.state.imagenes[3].url;
                  this.state.imagenes[10].url = this.state.imagenes[9].url;
                  this.state.imagenes[16].url = this.state.imagenes[15].url;
                  this.state.imagenes[22].url = this.state.imagenes[21].url;

                  this.state.imagenes[3].url = this.state.imagenes[2].url;
                  this.state.imagenes[9].url = this.state.imagenes[8].url;
                  this.state.imagenes[15].url = this.state.imagenes[14].url;
                  this.state.imagenes[21].url = this.state.imagenes[20].url;

                  this.state.imagenes[2].url = this.state.imagenes[1].url;
                  this.state.imagenes[8].url = this.state.imagenes[7].url;
                  this.state.imagenes[14].url = this.state.imagenes[13].url;
                  this.state.imagenes[20].url = this.state.imagenes[19].url;

                  this.state.imagenes[1].url = this.state.imagenes[0].url;
                  this.state.imagenes[7].url = this.state.imagenes[6].url;
                  this.state.imagenes[13].url = this.state.imagenes[12].url;
                  this.state.imagenes[19].url = this.state.imagenes[18].url;


                  this.state.imagenes[0].url = response.data[0].url;
                  this.state.imagenes[6].url = response.data[1].url;
                  this.state.imagenes[12].url = response.data[2].url;
                  this.state.imagenes[18].url = response.data[3].url;

                  this.forceUpdate();
                    console.log(response.data);
                })
            });


        /**this.obtenerImagenesPosicion();*/

    }


    moverArriba() {
        this.setState({
            y: this.state.y + 1
        }, function() {
            console.log(response.data);
        })


        axios.get(ROOT_URL + "/imagenes/0/"+6)
            .then(response => {
                this.setState({
                }, function() {

                  this.state.imagenes[18].url = this.state.imagenes[12].url;
                  this.state.imagenes[19].url = this.state.imagenes[13].url;
                  this.state.imagenes[20].url = this.state.imagenes[14].url;
                  this.state.imagenes[21].url = this.state.imagenes[15].url;
                  this.state.imagenes[22].url = this.state.imagenes[16].url;
                  this.state.imagenes[23].url = this.state.imagenes[17].url;

                  this.state.imagenes[12].url = this.state.imagenes[6].url;
                  this.state.imagenes[13].url = this.state.imagenes[7].url;
                  this.state.imagenes[14].url = this.state.imagenes[8].url;
                  this.state.imagenes[15].url = this.state.imagenes[9].url;
                  this.state.imagenes[16].url = this.state.imagenes[10].url;
                  this.state.imagenes[17].url = this.state.imagenes[11].url;

                  this.state.imagenes[6].url = this.state.imagenes[0].url;
                  this.state.imagenes[7].url = this.state.imagenes[1].url;
                  this.state.imagenes[8].url = this.state.imagenes[2].url;
                  this.state.imagenes[9].url = this.state.imagenes[3].url;
                  this.state.imagenes[10].url = this.state.imagenes[4].url;
                  this.state.imagenes[11].url = this.state.imagenes[5].url;

                  this.state.imagenes[0].url = response.data[0].url;
                  this.state.imagenes[1].url = response.data[1].url;
                  this.state.imagenes[2].url = response.data[2].url;
                  this.state.imagenes[3].url = response.data[3].url;
                  this.state.imagenes[4].url = response.data[4].url;
                  this.state.imagenes[5].url = response.data[5].url;

                  this.forceUpdate();
                    console.log(response.data);
                })
            });

        /**this.obtenerImagenesPosicion();*/

    }


    moverAbajao() {
        this.setState({
            y: this.state.y - 1
        }, function() {
            console.log(response.data);
        })

        axios.get(ROOT_URL + "/imagenes/0/"+6)
            .then(response => {
                this.setState({
                }, function() {

                  this.state.imagenes[0].url = this.state.imagenes[6].url;
                  this.state.imagenes[1].url = this.state.imagenes[7].url;
                  this.state.imagenes[2].url = this.state.imagenes[8].url;
                  this.state.imagenes[3].url = this.state.imagenes[9].url;
                  this.state.imagenes[4].url = this.state.imagenes[10].url;
                  this.state.imagenes[5].url = this.state.imagenes[11].url;

                  this.state.imagenes[6].url = this.state.imagenes[12].url;
                  this.state.imagenes[7].url = this.state.imagenes[13].url;
                  this.state.imagenes[8].url = this.state.imagenes[14].url;
                  this.state.imagenes[9].url = this.state.imagenes[15].url;
                  this.state.imagenes[10].url = this.state.imagenes[16].url;
                  this.state.imagenes[11].url = this.state.imagenes[17].url;

                  this.state.imagenes[12].url = this.state.imagenes[18].url;
                  this.state.imagenes[13].url = this.state.imagenes[19].url;
                  this.state.imagenes[14].url = this.state.imagenes[20].url;
                  this.state.imagenes[15].url = this.state.imagenes[21].url;
                  this.state.imagenes[16].url = this.state.imagenes[22].url;
                  this.state.imagenes[17].url = this.state.imagenes[23].url;

                  this.state.imagenes[18].url = response.data[0].url;
                  this.state.imagenes[19].url = response.data[1].url;
                  this.state.imagenes[20].url = response.data[2].url;
                  this.state.imagenes[21].url = response.data[3].url;
                  this.state.imagenes[22].url = response.data[4].url;
                  this.state.imagenes[23].url = response.data[5].url;

                  this.forceUpdate();
                    console.log(response.data);
                })
            });


        /**this.obtenerImagenesPosicion();*/

    }

    render() {
            return (
              < div className = "home" >
                < div id = "barraBusqueda" >
                  <div className="col-md-12 buscador">
                    <br/>
                    <input type="text" onChange={(event) => this.obtenerImagesCriterio(event.target.value)}/>
                  </div>
                  <br/>
              </div>

              <div>

              <div id="arriba" class="butt"  onClick = { this.moverArriba.bind(this) } ></div>
              <br/>
              <br/>
              <div id="izquierda" class="butt" onClick = { this.moverALaIzquierda.bind(this) } ></div>
              <div id="derecha" class="butt" onClick = { this.moverALaDerecha.bind(this) } ></div>
              <br/>
              <br/>
              <div id="abajo" class="butt" onClick = { this.moverAbajao.bind(this) } ></div>
              <br/>
              </div>

              < div id="galeria"> {
                    this.state.imagenes.map(imagesData => < ImagePreview key = { imagesData.id } {...imagesData }
                        />)}
                        < /div>  < /div>


                        );
                }
            }

            export default App;
