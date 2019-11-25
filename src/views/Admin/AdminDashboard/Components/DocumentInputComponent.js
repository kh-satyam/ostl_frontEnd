import React, { useState, Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import Axios from "axios";
import cookie from "react-cookies";

import { createBrowserHistory } from "history";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

class DocumentInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docType: "Thesis",
      title: "",
      docLinks: "",
      description: "",
      file: null
    };
  }

  setDocType(data) {
    this.setState({ docType: data });
  }

  setTitle(event) {
    this.setState({ title: event.target.value });
  }

  setDocLinks(event) {
    this.setState({ docLinks: event.target.value });
  }

  setDescription(event) {
    this.setState({ description: event.target.value });
  }

  fileHandler(event) {
    this.setState({ file: event.target.files[0] });
    console.log(event.target.files[0]);
  }

  componentDidMount() {}

  checkDocumentFieldAreNotEmpty() {}
  addDocument() {
    var ostlCookie = this.props.ostlCookie;
    let protocol = ostlCookie["protocol"];
    let domain = ostlCookie["domain"];
    var docType = this.state.docType;
    var docTitle = this.state.title;
    var docLinks = this.state.docLinks;
    var docDescription = this.state.description;
    var docFile = this.state.file;
    let date = new Date();
    let docMonth = date.getUTCMonth() + 1;
    let docDate =
      date.getUTCFullYear() + "-" + docMonth + "-" + date.getUTCDate();
    if (docTitle === "") {
      alert("Document Title cannot be empty");
    } else if (docDescription === "") {
      alert("Document description cannot be empty");
    } else {
      var docData = {
        title: docTitle,
        dt: docType,
        description: docDescription,
        link: docLinks,
        date: docDate
      };
      console.log(JSON.stringify(docData));
      var formData = new FormData();
      formData.set("formData", JSON.stringify(docData));
      formData.append("file", docFile);
      let url = protocol + "://" + domain + "/document";

      Axios({
        method: "post",
        url: url,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + ostlCookie["token"]
        }
      })
        .then(function(success) {
          //handle success
          alert("Document Added");
        })
        .catch(function(error) {
          //handle error
          console.log(Object.keys(error));
          let errorStatusCode = error.response.status;
          console.log(error.response);
          console.log(errorStatusCode + " " + error);
          if (errorStatusCode === 401) {
            alert("Login Again");
            cookie.remove("ostlCookie", { path: "/" });
            //this.hist.push("/admin");
          } else {
            alert("Document cannot be uploaded.Please try again");
          }
        });
    }
  }

  // console.log("data:", value);
  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <CustomDropdown
              buttonText={this.state.docType}
              dropdownList={[
                "Thesis",
                "corporateCollaboration",
                "Publication",
                "Project",
                "Article",
                "News"
              ]}
              onClick={data => this.setDocType(data)}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              id="Title"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                placeholder: "Title",
                onChange: event => this.setTitle(event)
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              id="DocumentLinks"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                placeholder: "DocumentLinks",
                onChange: event => this.setDocLinks(event)
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Description"
              id="material"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                multiline: "true",
                onChange: event => this.setDescription(event)
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Button variant="contained" component="label">
              Upload Project Files
              <input
                type="file"
                onChange={event => this.fileHandler(event)}
                style={{ display: "none" }}
              />
            </Button>
          </GridItem>
          <GridItem>
            <Button
              onClick={() => {
                this.addDocument();
              }}
            >
              Submit
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//     return {
//       token:state.token
//     };
//   };

//   const mapDispatchToProps = dispatch => {
//     return {
//       addToken: (token) => dispatch({type:"ADD_BEARER_TOKEN",payload:token})
//     };
//   };

export default DocumentInputComponent;
//export default connect(mapStateToProps,mapDispatchToProps)(DocumentInputComponent);
