'use strict';
import React, { Component } from 'react';
import axios from 'axios';
const ROOT_URL = "http://localhost:8090";
import { Link } from 'react-router';

export default class ImagePreview extends Component {


  render() {
    return (
      <div class="Thumb">
          <img src={`${this.props.url}`}/>
      </div>

    );
  }
}
