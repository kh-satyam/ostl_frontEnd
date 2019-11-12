import React,{ Component } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

export default function DocumentInputComponent(){
    return (
      <div >
          <GridContainer>
          
          <GridItem xs={12} sm={12} md={3}>
          <CustomInput
                  id="DocumentType"
                  inputProps={{
                      placeholder: "DocumentType"
                  }}
                  formControlProps={{
                      fullWidth: true
                  }}
              />
              
          </GridItem>
          <GridItem>
          <CustomInput
                  id="Title"
                  inputProps={{
                      placeholder: "Title"
                  }}
                  formControlProps={{
                      fullWidth: true
                  }}
              />
          </GridItem>
          <GridItem>
          <CustomInput
                  id="DocumentLinks"
                  inputProps={{
                      placeholder: "DocumentLinks"
                  }}
                  formControlProps={{
                      fullWidth: true
                  }}
              />
          </GridItem>
          <GridItem>
          <CustomInput
                  id="Description"
                  inputProps={{
                      placeholder: "Description"
                  }}
                  formControlProps={{
                      fullWidth: true
                  }}
              />
          </GridItem>
          <GridItem>
          <Button  round>Upload Project Files</Button>
          </GridItem>
          <GridItem>
             <Button  round>Submit</Button>
          </GridItem>
      </GridContainer>
      </div>
    );
  }