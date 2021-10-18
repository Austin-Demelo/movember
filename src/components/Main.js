import React, { Component } from "react"

import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import defaultMoustache from "../images/moustache.png"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from "axios"
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goal: 1000,
            competitorsList: ['']
        }

    }

    componentDidMount(){
        axios.post('http://localhost:4000/getCompetitors', {

        }).then((response) => {
            if (response.status === 200) {
                console.log("success")
                var dataArray = []
                
                response.data.map((item,index) => { dataArray.push(item)})
                console.log(dataArray)
                console.log(dataArray)
                this.setState({ competitorsList: dataArray })
            } else {
                console.log("error")
            }
        }, (error) => {

        });
    }

    render() {
        
        return (
            <div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h1>Movember!</h1>
                </div>
                <div style={{paddingLeft: "1.5%", paddingRight: "1.5%", position: "absolute", top: '10px', right: '10px'}}>
                        <Link to="/Login" style={{textDecoration: "none"}}><Button variant="contained" color="primary">Login</Button></Link>
                   </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h3>Goal: ${this.state.goal}</h3>
                </div>
                <div style={{ marginLeft: "5%", marginRight: "5%"}}>
                    <ProgressBar animated now={45} />
                </div>

              
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
                
                
                
                {/*Main Div */}
                <div >
                    
                        <Container>
                       
                            <Row md={4}>
                                {this.state.competitorsList.map((item,index)=>(
                                    <Col>
                                        {/**maybe take out cardactionarea doesn't make much sense */}
                                        <Card style={{maxWidth: 345, backgroundColor: "lightblue", marginTop: "5%"}}>
                                            {/* <CardActionArea> */}
                                            <div style={{display: "flex", justifyContent: "center"}}>
                                                <img src={defaultMoustache} alt="stache" style={{paddingTop: 10, borderRadius: "50%", display: "inline-block", position: "relative", width: 200,height: 200, overflow: "hidden",}} />
                                            </div>
                                            
                                            <CardContent style={{display: "flex", justifyContent: "center"}}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.MoustacheName}
                                            </Typography>
                                            </CardContent>
                                            {/* </CardActionArea> */}
                                            <CardActions style={{display: "flex", justifyContent: "center"}}>
                                                <Link to="/Donate" style={{textDecoration: "none"}}><Button size="large" variant="contained" color="primary">
                                                Donate
                                                </Button></Link>
                                                {/* <Button size="small" color="primary">
                                                Share
                                                </Button> */}
                                            </CardActions>
                                        </Card>
                                    </Col>
                                 ))}
                            </Row>
                           
                        </Container>
                     
                </div>


            </div >

        )
    }
    
}


export default Main;