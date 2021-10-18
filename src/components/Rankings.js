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

export class Rankings extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            stachesVisible: false,
            donatorsVisible: false,
        }

    }

    showStaches = () => {
        console.log("hi")
        this.setState({stachesVisible: true, donatorsVisible: false})
    }

    showDonators = () => {
        this.setState({stachesVisible: false, donatorsVisible: true})
    }
    

    render() {
        
        return (
            <div>
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

                <div style={{display:"inline-block"}}>
                    <Button onClick={() => this.showStaches()}>Top Staches</Button>
                    <Button onClick={() => this.showDonators()}>Top Donators</Button>
               </div>

            {this.state.stachesVisible &&
            <div>
                hi
            </div>
            
            }
            {/**end staches list */}

            {this.state.donatorsVisible &&
            <div>
                bye
            </div>
            
            }
            {/**end donators list */}

        </div > 

        )
    }
    
}


export default Rankings;