import * as React from "react"
import {
    Grid,
    Button,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
  } from "@mui/material";
  import { useState } from "react";
  import { Controller, useForm } from "react-hook-form";
  import { FormInputText } from "../components/FormInputText";
  import { navigate } from "gatsby-link";
  
function LoginForm() {
    const [loading, setLoading] = useState(false);
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();
    const [success, setSuccess] = useState(false);
    const formOptions = {
        name: { required: "Name is required" },

    };
    const onFormSubmit = (data: any) => {
        if (data["Name"]) {
            navigate("/datacollect", {state: {name: data["Name"]}})
        }
        

    };

    const onError = (errors: any) => {
        console.log(errors);
    };

    return (
        
            <form onSubmit={handleSubmit(onFormSubmit, onError)}>
                <Grid container sx={{
                    flexDirection: "column",
                    alignItems: "stretch",
                    gap: 2,
                    "& .MuiTextField-root": { m: 1, width: "90%" },
                }}>
                <FormInputText
                name={"Name"}
                control={control}
                label={"Name"}
                rules={formOptions.name}
                />
                <Button type="submit" variant="outlined" onClick={onFormSubmit}>
                    Continue
                </Button>
            
                </Grid>
         
            </form>
    )
}

export default LoginForm