import React, { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Button, IconButton, List, ListItem, ListItemAvatar, ListItemText, Avatar, FormHelperText, FormControl } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { Controller, UseFormRegister, Control, FieldError, useFormContext } from 'react-hook-form';

interface DynamicFormInputProps {
  label: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  validation: any;
  error?: FieldError;
  name: string;
  control: Control<any>;
  type: string;
}

const DynamicFormInput = ({
  label,
  placeholder,
  register,
  validation,
  error,
  name,
  control,
  type,
}: DynamicFormInputProps) => {
  const { setValue } = useFormContext(); // Get the form methods

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const getValidationRules = () => {
    switch (type) {
      case "email":
        return {
          ...validation,
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Niepoprawny format e-maila",
          },
        };
      case "tel":
        return {
          ...validation,
          pattern: {
            value: /^[+]?[0-9]{1,4}?([-\s]?[0-9]{1,3}){3,5}$/,
            message: "Niepoprawny numer telefonu",
          },
        };
      default:
        return validation;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
      setValue(name, fileArray); // Update form value
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    setValue(name, updatedFiles); // Update form value
  };

  const renderInput = () => {
    switch (type) {
      case "checkbox":
        return (
          <FormControl error={!!error} component="fieldset">
            <FormControlLabel
              control={
                <Controller
                  name={name}
                  control={control}
                  rules={validation}
                  render={({ field }) => (
                    <Checkbox
                      checked={!!field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                      color="success"
                    />
                  )}
                />
              }
              label={label}
            />
            {error && (
              <FormHelperText>{error.message}</FormHelperText>
            )}
          </FormControl>
        );
      case "textarea":
        return (
          <TextField
            label={label}
            placeholder={placeholder}
            multiline
            rows={4}
            {...register(name, getValidationRules())}
            error={!!error}
            helperText={error?.message}
            variant="outlined"
            fullWidth
            color="success"
          />
        );
      case "file":
        return (
          <div className="flex flex-col gap-2">
            <label htmlFor={name}>
              <Button
                component="span"
                startIcon={<CloudUploadIcon />}
                variant="contained"
                color="success"
                className="mb-2"
              >
                {label}
              </Button>
            </label>
            <input
              type="file"
              id={name}
              style={{ display: 'none' }}
              {...register(name, validation)}
              onChange={handleFileChange}
              multiple
            />
            {error && <p className="text-red-500 font-semibold">{error.message}</p>}
            <div className="mt-2">
              {selectedFiles.length > 0 && (
                <List className='border'>
                  {selectedFiles.map((file, index) => (
                    <ListItem
                      key={index}
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveFile(index)}>
                          <DeleteIcon color='error' />
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <CloudUploadIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={file.name}
                        secondary={`${(file.size / 1024).toFixed(2)} KB`}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
            </div>
          </div>
        );
      default:
        return (
          <TextField
            type={type}
            label={label}
            placeholder={placeholder}
            {...register(name, getValidationRules())}
            error={!!error}
            helperText={error?.message}
            variant="outlined"
            fullWidth
            color="success"
            className='text-justify'
          />
        );
    }
  };

  return <div className="flex flex-col gap-2">{renderInput()}</div>;
};

export default DynamicFormInput;
