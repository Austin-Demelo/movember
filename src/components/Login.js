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

export class Main extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: "",
            password: "",
            firstname: "",
            moustachename: "",
            currentFile: undefined,
            previewImage: undefined,
            progress: 0,
            message: "",
            imageInfos: [],
            selectedPicture: defaultMoustache,
            myFile: "",
            url: "http://localhost:4000/uploads",
            f: "hi"
        }

    }
    // const [postImage, setPostImage] = useState({
    //   myFile: "",
    // });
  
  //  createImage = (newImage) => axios.post(this.state.url, newImage);
   
      createImage = async () => {
        const date = new Date()
        axios.post('http://localhost:4000/uploads', {
          fileName: `${this.state.firstname}${date.getDate()}`,
          myFile: this.state.myFile
        }).then((response) => {
            if (response.status === 200) {
                console.log("success")
                // var dataArray = []
                // response.data.map((item,index) => { dataArray.push(item.city_name) })
                // this.setState({ citiesList: dataArray })
            } else {
                console.log("error")
            }
        }, (error) => {

        });
}

    //  createPost = async (post) => {
    //   try {
    //     await this.createImage(post);
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };
  
    //  handleSubmit = (e) => {
    //   e.preventDefault();
    //   // this.createPost(postImage);
    //   // this.createPost(this.state.myFile);
    //   this.createPost(this.state.myFile)
    // };
  
     convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };
    handleFileUpload = async (e) => {
      // this.setState({selectedPicture: e.target.files[0]}) 
      const file = e.target.files[0];
      const base64 = await this.convertToBase64(file);
      // setPostImage({ ...postImage, this.setState({myFile: base64}) });
      this.setState({myFile: base64}) //idk if this is right the above line was kinda the og, modified a lil
    };


    // componentDidMount() {
    //     UploadService.getFiles().then((response) => {
    //       this.setState({
    //         imageInfos: response.data,
    //       });
    //     });
    //   }

    // selectFile = (event) => {
    //     this.setState({
    //         currentFile: event.target.files[0],
    //         previewImage: URL.createObjectURL(event.target.files[0]),
    //         progress: 0,
    //         message: "",
    //         selectedPicture: URL.createObjectURL(event.target.files[0]),
    //     })
    // }


    // upload = async() => {
    //     this.setState({
    //       progress: 0,
    //     });

    //     let formData = new FormData();
    //     formData.append("file", this.state.currentFile);

    //     axios.post('http://localhost:4000/upload',{
    //         email: this.state.email, password: this.state.password, firstname: this.state.firstname, moustachename: this.state.moustachename, picture: formData,
    //     }).then((response) => {
    //         if(response.status === 200){
    //             console.log("success signing up")
    //             console.log(response)
    //         }
    //       })
    //       .catch((err) => {
    //         console.log("error signing up")
    //         console.log(err)
    //       });
        // UploadService.upload(this.state.currentFile, this.state.email, this.state.password, this.state.firstname, this.state.moustachename = () => {
          
        // })
        //   .then((response) => {
            
        //     return UploadService.getFiles();
        //   })
        //   .then((files) => {
        //     this.setState({
        //       imageInfos: files.data,
        //     });
        //   })
        //   .catch((err) => {
        //     this.setState({
        //       progress: 0,
        //       message: "Could not upload the image!",
        //       currentFile: undefined,
        //     });
        //   });
        //}

    logUserIn = async () => {
        
        axios.post('http://localhost:4000/logUserIn', {
            email: this.state.email,
            password: this.state.password
        }).then((response) => {
            if (response.status === 200) {
                console.log("success")
                // var dataArray = []
                // response.data.map((item,index) => { dataArray.push(item.city_name) })
                // this.setState({ citiesList: dataArray })
            } else {
                console.log("error")
            }
        }, (error) => {

        });
    }

    render() {
        
        return (
            <div style={{ display:"flex", justifyContent: "center", }}>
                <Card style={{maxWidth: 345, backgroundColor: "lightblue",marginTop: "5%", marginRight: "2.5%"}}>
                    <CardContent style={{display: "flex", justifyContent: "center"}}>
                    <div>
                        <TextField label="Email" onChange={e => this.setState({email: e.target.value})}></TextField>
                        <TextField label="Password" onChange={e => this.setState({password: e.target.value})}></TextField>
                    </div>
                    </CardContent>
                    <CardActions style={{display: "flex", justifyContent: "center"}}>
                        <Link to="/" style={{textDecoration: "none"}}><Button size="large" variant="contained" color="primary" onClick={() => this.logUserIn()}>
                        Login
                        </Button></Link>
                        <Link to="/" style={{textDecoration: "none"}}><Button size="large" variant="contained" >
                        Cancel
                        </Button></Link>
                    </CardActions>
                </Card>
                <Card style={{maxWidth: 345, backgroundColor: "lightgreen",marginTop: "5%", marginLeft: "2.5%"}}>
                    <CardContent style={{display: "flex", justifyContent: "center"}}>
                    <div>
                        <TextField label="Email" onChange={e => this.setState({email: e.target.value})}></TextField>
                        <TextField label="Password" onChange={e => this.setState({password: e.target.value})}></TextField>
                        <TextField label="First Name" onChange={e => this.setState({firstname: e.target.value})}></TextField>
                        <TextField label="Moustache Name" onChange={e => this.setState({moustachename: e.target.value})}></TextField>
                        {/* <div className="col-8">
                            <label className="btn btn-default p-0">
                            <input type="file" accept="image/*" onChange={this.selectFile} />
                            </label>
                        </div> */}
                         <form onSubmit={() => this.createImage()}>
                          <input
                            type="file"
                            label="Image"
                            name="myFile"
                            accept=".jpeg, .png, .jpg"
                            onChange={(e) => this.handleFileUpload(e)}
                          />

                          <button>Submit</button>
                        </form>

                         <div style={{display: "flex", justifyContent: "center"}}>
                            <img src={this.state.selectedPicture} alt="stache" style={{paddingTop: 10, borderRadius: "50%", display: "inline-block", position: "relative", width: 200,height: 200, overflow: "hidden",}} />
                        </div>
                    </div>
                    </CardContent>
                    <CardActions style={{display: "flex", justifyContent: "center"}}>
                        <Button size="large" variant="contained" color="primary" onClick={() => this.upload()}>
                        Signup
                        </Button>
                        <Link to="/" style={{textDecoration: "none"}}><Button size="large" variant="contained" >
                        Cancel
                        </Button></Link>
                    </CardActions>
                </Card>


                {/* <div className="row">
          <div className="col-8">
            <label className="btn btn-default p-0">
              <input type="file" accept="image/*" onChange={this.selectFile} />
            </label>
          </div>

          <div className="col-4">
            <button
              className="btn btn-success btn-sm"
              disabled={this.state.firstnamecurrentFile}
              onClick={this.upload}
            >
              Upload
            </button>
          </div>
        </div>

        {this.state.currentFile && (
          <div className="progress my-3">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={this.state.progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: this.state.progress + "%" }}
            >
              {this.state.progress}%
            </div>
          </div>
        )}

        {this.state.previewImage && (
          <div>
            <img className="preview" src={this.state.previewImage} alt="" />
          </div>
        )}

        {/* {this.state.message && (
          <div className="alert alert-secondary mt-3" role="alert">
            {this.state.message}
          </div> 
        )} */}
 
        {/* <div className="card mt-3">
          <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {this.state.imageInfos &&
              this.state.imageInfos.map((img, index) => (
                <li className="list-group-item" key={index}>
                  <a href={img.url}>{img.name}</a>
                </li>
              ))}
          </ul>
        </div> */} 

        
        </div > 

        )
    }
    
}


export default Main;