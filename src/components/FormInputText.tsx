import * as React from "react"
import { TextField } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

interface FormInputTextProps {
  name: string;
  control: Control<FieldValues, any>;
  label: string;
  rules?: { required: string } | { required: boolean };
  multiline?: boolean;
  defaultValue?: string;
}
export const FormInputText = ({
  name,
  control,
  label,
  rules,
  multiline = false,
  defaultValue = "",
}: FormInputTextProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={
        ({ field: { onChange, value } }) => (
          <TextField
            label={label}
            InputLabelProps={{ shrink: true }}
            required={rules?.required ? true : false}
            size="small"
            onChange={onChange}
            value={value}
            multiline={multiline}
          />
        ) //need to format the popup so that it anchors on the textfield
      }
      rules={rules}
    />
  );
};
