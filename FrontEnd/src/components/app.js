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
            cant: 25,
            bus: "",

        };
        this.obtenerImagenesPosicion();

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
            return ( < div className = "home" >
                < div id = "barraBusqueda" >
            <div className="col-md-12 buscador">
             <input type="text" onChange={(event) => this.obtenerImagesCriterio(event.target.value)}/>
            </div>
                < /div> 

                < div className = "athletes-selector" > {
                    this.state.imagenes.map(imagesData => < ImagePreview key = { imagesData.id } {...imagesData }
                        />)}  < button onClick = { this.moverArriba.bind(this) } > arriba < /button>  < button onClick = { this.moverAbajao.bind(this) } > abajo < /button> < button onClick = { this.moverALaIzquierda.bind(this) } > izquiera < /button> < button onClick = { this.moverALaDerecha.bind(this) } > derecha < /button> < /div>  < /div>
                    );
                }
            }

            export default App;
