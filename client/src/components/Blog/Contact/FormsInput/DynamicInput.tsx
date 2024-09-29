import React, { useState } from 'react';
import { 
  TextField, 
  Checkbox, 
  FormControlLabel, 
  Button, 
  IconButton, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Avatar, 
  FormHelperText, 
  FormControl, 
  InputAdornment 
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Controller, UseFormRegister, Control, FieldError, useFormContext } from 'react-hook-form';

interface DynamicFormInputProps {
  label: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  validation: any;
  error?: FieldError | undefined;
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
  const { setValue } = useFormContext();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false); // State for showing password

  const getValidationRules = () => {
    const rules = { ...validation };

    if (type === 'email') {
      rules.pattern = {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Niepoprawny format e-maila',
      };
    }

    if (type === 'tel') {
      rules.pattern = {
        value: /^[+]?[0-9]{1,4}?([-\s]?[0-9]{1,3}){3,5}$/i,
        message: 'Niepoprawny numer telefonu',
      };
    }

    if (type === 'password') {
      rules.minLength = { value: 8, message: 'Hasło musi mieć co najmniej 8 znaków' };
      // Removed the rule that requires the password to start with "pte-"
    }

    return rules;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
      setValue(name, fileArray);
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    setValue(name, updatedFiles);
  };

  const renderInput = () => {
    switch (type) {
      case 'checkbox':
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
            {error && <FormHelperText>{error.message}</FormHelperText>}
          </FormControl>
        );
      case 'textarea':
        return (
          <TextField
            label={label}
            placeholder={placeholder}
            multiline
            rows={4}
            {...register(name, getValidationRules())}
            error={!!error}
            helperText={error?.message}
            variant="standard"
            fullWidth
            color="success"
            required
          />
        );
      case 'file':
        return (
          <div className="flex flex-col gap-2">
            <label htmlFor={name}>
              <Button
                component="span"
                startIcon={<CloudUploadIcon />}
                variant="contained"
                color="success"
                className="mb-2 w-full"
              >
                {label}
              </Button>
            </label>
            <input
              type="file"
              id={name}
              name={name}
              style={{ display: 'none' }}
              onChange={handleFileChange}
              multiple
              required
            />
            {error && <p className="text-red-500 font-semibold">{error.message}</p>}
            <div className="mt-2">
              {selectedFiles.length > 0 && (
                <List className="border  text-pretty break-words">
                  {selectedFiles.map((file, index) => (
                    <ListItem
                      key={index}
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveFile(index)}>
                          <DeleteIcon color="error" />
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <CloudUploadIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText  primary={file.name} secondary={`${(file.size / 1024).toFixed(2)} KB`} />
                    </ListItem>
                  ))}
                </List>
              )}
            </div>
          </div>
        );
      case 'password':
        return (
          <TextField
            type={showPassword ? 'text' : 'password'} // Change type based on showPassword state
            label={label}
            placeholder={placeholder}
            required
            {...register(name, {
              ...getValidationRules(),
              onChange: (e) => {
                const inputValue = e.target.value;
                setValue(name, inputValue); // Directly set the value without prefix check
                setPasswordValue(inputValue);
              },
            })}
            error={!!error}
            helperText={error?.message}
            variant="standard"
            fullWidth
            color="success"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)} // Toggle showPassword state
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />} {/* Toggle icon */}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        );

      default:
        return (
          <TextField
            type={type}
            label={label}
            placeholder={placeholder}
            required
            {...register(name, getValidationRules())}
            error={!!error}
            helperText={error?.message}
            variant="standard"
            fullWidth
            color="success"
          />
        );
    }
  };

  return <div className="flex flex-col gap-2">{renderInput()}</div>;
};

export default DynamicFormInput;
