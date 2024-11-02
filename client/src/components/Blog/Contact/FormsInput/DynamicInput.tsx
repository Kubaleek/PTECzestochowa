import React, { useEffect, useState } from 'react';
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
import { RegisterOptions } from 'react-hook-form';
import { Controller, UseFormRegister, Control, FieldError, useFormContext } from 'react-hook-form';

interface DynamicFormInputProps {
  label: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  validation: RegisterOptions;
  error?: FieldError | undefined;
  name: string;
  control: Control<any>;
  type: string;
  initialValue?: any; // Add initialValue prop
}

const getValidationRules = (type: string, validation: any) => {
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
  }

  return rules;
};

const DynamicFormInput = ({
  label,
  placeholder,
  register,
  validation,
  error,
  name,
  control,
  type,
  initialValue // Destructure the initialValue prop
}: DynamicFormInputProps) => {
  const { setValue } = useFormContext();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Set the initial value when the component mounts or when initialValue changes
  useEffect(() => {
    if (initialValue !== undefined) {
      setValue(name, initialValue);
      if (type === 'file' && initialValue instanceof FileList) {
        setSelectedFiles(Array.from(initialValue));
      }
    }
  }, [initialValue, setValue, name, type]);

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

  const renderCheckbox = () => (
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

  const renderTextarea = () => (
    <TextField
      label={label}
      placeholder={placeholder}
      multiline
      rows={4}
      {...register(name, getValidationRules(type, validation))}
      error={!!error}
      helperText={error?.message}
      variant="standard"
      fullWidth
      color="success"
    />
  );

  const renderFileInput = () => (
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
      />
      {error && <p className="text-red-500 font-semibold">{error.message}</p>}
      <div className="mt-2">
        {selectedFiles.length > 0 && (
          <List className="border text-pretty break-words">
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
                <ListItemText primary={file.name} secondary={`${(file.size / 1024).toFixed(2)} KB`} />
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </div>
  );

  const renderPasswordInput = () => (
    <TextField
      type={showPassword ? 'text' : 'password'}
      label={label}
      placeholder={placeholder}
      {...register(name, {
        ...getValidationRules(type, validation),
        onChange: (e) => {
          const inputValue = e.target.value;
          setValue(name, inputValue);
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
              onClick={() => setShowPassword((prev) => !prev)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );

  const renderDefaultInput = () => (
    <TextField
      type={type}
      label={label}
      placeholder={placeholder}
      {...register(name, getValidationRules(type, validation))}
      error={!!error}
      helperText={error?.message}
      variant="standard"
      fullWidth
      color="success"
    />
  );

  const renderInput = () => {
    switch (type) {
      case 'checkbox':
        return renderCheckbox();
      case 'textarea':
        return renderTextarea();
      case 'file':
        return renderFileInput();
      case 'password':
        return renderPasswordInput();
      default:
        return renderDefaultInput();
    }
  };

  return <div className="flex flex-col gap-1">{renderInput()}</div>;
};

export default DynamicFormInput;
