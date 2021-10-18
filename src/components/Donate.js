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

export class Donate extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }

    }

    

    render() {
        
        return (
            <div style={{ display:"flex", justifyContent: "center", }}>
                <div style={{display: "flex", justifyContent: "center", marginTop: "1.5%", marginBottom: "1.5%"}}>
                   <div style={{paddingLeft: "1.5%", paddingRight: "1.5%"}}>
                        <Link to="/" style={{textDecoration: "none "}}><Button variant="contained" color="primary">Main Page</Button></Link>
                   </div>
                   <div style={{paddingLeft: "1.5%", paddingRight: "1.5%"}}>
                        <Link to="/Rankings" style={{textDecoration: "none "}}><Button variant="contained" color="primary">Rankings</Button></Link>
                   </div>
                   <div style={{paddingLeft: "1.5%", paddingRight: "1.5%"}}>
                        <Link to="/Donate" style={{textDecoration: "none "}}><Button variant="contained" color="primary">Donate</Button></Link>
                   </div>
               </div>
                donateion
        
        </div > 

        )
    }
    
}


export default Donate;