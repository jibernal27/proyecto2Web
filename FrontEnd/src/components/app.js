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
            cant: 100,
            bus: "",

        };

        this.obtenerImagenesPosicion();
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
                    this.setState({
                        imagenes: response.data
                    });
                })
        }
    }

    obtenerImagenesPosicion() {

        axios.post(ROOT_URL + "/imagenes", {
                x: this.state.x,
                y: this.state.y,
                num: this.state.cant
            })
            .then(response => {
                this.setState({
                    imagenes: response.data,
                }, function() {
                    console.log("Cabio estado");
                })
            });
    }

    moverALaDerecha() {
        this.setState({
            x: this.state.x + this.state.cant
        }, function() {
            console.log("Cabio estado");
        })
        this.obtenerImagenesPosicion();

    }


    moverALaIzquierda() {
        this.setState({
            x: this.state.x - this.state.cant
        }, function() {
            console.log("Cabio estado");
        })
        this.obtenerImagenesPosicion();

    }


    moverArriba() {
        this.setState({
            y: this.state.y + this.state.cant
        }, function() {
            console.log("Cabio estado");
        })
        this.obtenerImagenesPosicion();

    }


    moverAbajao() {
        this.setState({
            y: this.state.y - this.state.cant
        }, function() {
            console.log("Cabio estado");
        })
        this.obtenerImagenesPosicion();

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


              < div id="galeria"> {
                    this.state.imagenes.map(imagesData => < ImagePreview key = { imagesData.id } {...imagesData }
                        />)}
                        < /div> 
			<div id="flechas">
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
			</div>


                        );
                }
            }

            export default App;
