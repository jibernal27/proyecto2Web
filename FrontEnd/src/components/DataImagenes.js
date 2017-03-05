'use strict';
import React from 'react';
var request = require("request");
var axios = require("axios");
var url = "http://localhost:8090/imagenes/dog/10";


class DataImagenes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        	imagenes:[]
        };
    }


 	obtenerImages() {
    var _this = this;
    this.serverRequest =
        axios
        .get(url)
        .then(function(result) {
            _this.setState({
                imagenes: result.data.jobs
            });
        })
};

	render{
    return (
      <div>
        {/* Render stuff here */}
      </div>
    )
  };


}

export default DataImagenes;
