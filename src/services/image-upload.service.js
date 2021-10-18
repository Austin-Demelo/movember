import http from "../http-common";

class FileUploadService {
  upload(file, email, password, firstname, moustachename) {
    let formData = new FormData();

    formData.append("file", file);
    formData.append("email", email);
    formData.append("firstname", firstname);
    return http.post("/upload", formData, {
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
      
    });
  }

 
}

export default new FileUploadService();