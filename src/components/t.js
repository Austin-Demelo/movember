import React, { Component } from "react"

import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from "@material-ui/core";
import defaultMoustache from "../images/moustache.png"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from "axios"
import UploadService from "../services/image-upload.service"
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

export class t extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            fileName: ''
        }

    }
    
    saveFile = (e) => {
        this.setState({file: e.target.files[0]})
        this.setState({fileName: e.target.files[0].name})
      }
      


     uploadFile = async (e) => {
      const formData = new FormData();
      formData.append("file", this.state.file);
      formData.append("fileName", this.state.fileName);
      try {
        const res = await axios.post(
          "http://localhost:4000/upload",
          formData
        );
        console.log(res);
      } catch (ex) {
        console.log(ex);
      }
    };

  render(){
    return (
      <div className="App">
        <input type="file" onChange={this.saveFile} />
        <button onClick={this.uploadFile}>Upload</button>
        
      </div>
    );
}
}

export default t;