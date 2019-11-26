import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import { CardActionArea } from "@material-ui/core";
import { Link } from "react-router-dom";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
import CustomInput from "components/CustomInput/CustomInput.js";
import cookies from 'react-cookies';
import Axios from "axios";

import {
  cardTitle,
  cardLink,
  cardSubtitle
} from "assets/jss/material-kit-react.js";
import PropTypes from "prop-types";

const styles = {
  cardTitle,
  cardLink,
  cardSubtitle,
  textCenter: {
    textAlign: "center"
  },
  textRight: {
    textAlign: "right"
  }
};
const useStyles = makeStyles(styles);

const DocumentCard = props => {
  const [expand, setExpand] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    'id': props.id, 'dt': props.documentType, 'title': props.title,
    'description': props.description, 'link': props.link,
    author:props.author
  });

  const setDocType = (data) => {

    let tempFormData = formData;
    tempFormData['dt'] = data;
    setFormData(tempFormData);
    console.log(formData);

  }

  const setAuthor = (event) => {

    let tempFormData = formData;
    tempFormData['author'] = event.target.value;
    setFormData(tempFormData);
    console.log(formData);

  }
  
  const setTitle = (event) => {

    let tempFormData = formData;
    tempFormData['title'] = event.target.value;
    setFormData(tempFormData);
    console.log(formData);

  }

  const setDocLinks = (event) => {

    let tempFormData = formData;
    tempFormData['link'] = event.target.value;
    setFormData(tempFormData);
    console.log(formData);

  }

  const setDescription = (event) => {

    let tempFormData = formData;
    tempFormData['description'] = event.target.value;
    setFormData(tempFormData);
    console.log(formData);

  }

  const updateDocument = () => {

    let ostlCookie = cookies.load("ostlCookie");
    let protocol = ostlCookie['protocol'];
    let domain = ostlCookie['domain'];
    let url = protocol + "://" + domain + "/document";
    let token = ostlCookie['token'];
    let newFormData = JSON.stringify(formData);
    console.log(newFormData);
    console.log(token);
    Axios({
      method: 'put',
      url: url,
      data: newFormData,
      headers: {
         'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
      .then(function (success) {
        //handle success
        alert("Document Updated");
        window.location.reload();
      })
      .catch(function (error) {
        //handle error
        console.log(Object.keys(error));
        let errorStatusCode = error.response.status;
        console.log(error.response);
        console.log(errorStatusCode + " " + error);
        if (errorStatusCode === 401) {
          alert("Login Again");
          cookies.remove('ostlCookie', { path: '/' });
          //this.hist.push("/admin");
        } else {
          alert("Document cannot be uploaded.Please try again");
        }
      });
  }

  const deleteDocument = () => {
    
    let ostlCookie = cookies.load("ostlCookie");
    let protocol = ostlCookie['protocol'];
    let domain = ostlCookie['domain'];
    let url = protocol + "://" + domain + "/document/"+props.id;
    let token = ostlCookie['token'];
    Axios({
      method: 'delete',
      url: url,
      // data: newFormData,
      headers: {
        //  'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
      .then(function (success) {
        //handle success
        alert("Document Deleted");
        window.location.reload();
      })
      .catch(function (error) {
        //handle error
        console.log(Object.keys(error));
        let errorStatusCode = error.response.status;
        console.log(error.response);
        console.log(errorStatusCode + " " + error);
        if (errorStatusCode === 401) {
          alert("Login Again");
          cookies.remove('ostlCookie', { path: '/' });
          //this.hist.push("/admin");
        } else {
          alert("Document cannot be uploaded.Please try again");
        }
      });
  }


  const toggle = () => {
    setExpand(!expand);
  };

  const handleClickOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  const classes = useStyles();

  const {
    id,
    title,
    author,
    description,
    date,
    link,
    documentType,
    viewCount,
    downloadCount
  } = props;

  const cardBody = () => {
    console.log(formData['dt']);
    return (
      <CardBody>
        <h4 className={classes.cardTitle}>{title}</h4>
        {!expand ? (
          <h5 className={classes.cardSubtitle}>
            {new Date(date).toDateString()},<br></br> {author}
          </h5>
        ) : (
            <div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomDropdown
                    buttonText={formData['dt']}
                    dropdownList={[
                      "Thesis",
                      "corporateCollaboration",
                      "Publication",
                      "Project",
                      "Article",
                      "News"
                    ]}
                    onClick={(data) => setDocType(data)}
                  />

                </GridItem >
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    id="Title"

                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{ defaultValue: formData['title'], placeholder: "Title", onChange: (event) => setTitle(event) }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    id="DocumentLinks"

                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{ defaultValue: formData['link'], placeholder: "DocumentLinks", onChange: (event) => setDocLinks(event) }}
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
                      defaultValue: formData['description'],
                      multiline: "true",
                      onChange: (event) => setDescription(event)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Authors"
                    id="authors"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue: formData['author'],
                      multiline: "true",
                      onChange: (event) => setAuthor(event)
                    }}
                  />
                </GridItem>     
              </GridContainer>
              <div className={classes.textCenter}>
                <Button round color="success" onClick={updateDocument}>
                  Update Details
              </Button>

                <Button round onClick={deleteDocument} color="rose">
                  Delete
              </Button>
                <Button round onClick={toggle} color="rose">
                  Close
              </Button>
              </div>
            </div>
          )}
      </CardBody>
    );
  };

  return (
    <Card>
      {!expand ? (
        <CardActionArea onClick={toggle}> {cardBody()} </CardActionArea>
      ) : (
          cardBody()
        )}
    </Card>
  );
};

export default DocumentCard;
