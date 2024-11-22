import {
  FormControl,
  FormGroup,
  InputLabel,
  Typography,
  Input,
  styled,
  Button,
  Box,
} from "@mui/material";
import React from "react";

const StyledFormGroup = styled(FormGroup)(({ theme }) => ({
  padding: theme.spacing(7),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth:"30%",
 boxShadow:"0px 0px 8px rgba(0,0,0,0.5 )",
 marginTop:"30px"

}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  minWidth: "100%",
  cursor: "pointer",
}));

function EntryForm() {
  return (
    <>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}} >
        <StyledFormGroup>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <Typography variant="h4">Work Todo Update </Typography>
          </div>
          <StyledFormControl>
            <InputLabel>First Name</InputLabel>
            <Input />
          </StyledFormControl>
          <StyledFormControl>
            <InputLabel>Last Name</InputLabel>
            <Input />
          </StyledFormControl>
          <StyledFormControl>
            <InputLabel>Email</InputLabel>
            <Input />
          </StyledFormControl>
          <StyledFormControl>
            <InputLabel>Department</InputLabel>
            <Input />
          </StyledFormControl>
          <StyledFormControl>
            <InputLabel>Salary</InputLabel>
            <Input />
          </StyledFormControl>
          <Box>
            <Button variant="outlined">Submit</Button>
            <Button sx={{ marginLeft: "10px" }} variant="outlined">
              Cancle
            </Button>
          </Box>
        </StyledFormGroup>
        </Box>
     
    </>
  );
}

export default EntryForm;
