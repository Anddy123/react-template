import styles from './Contact.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

export default function Contact() {
  const theme = useTheme();
  const [inquiryForm, setInquiryForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    inquiry: '',
    tags: [],
  });
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const tags = [
    'backend',
    'frontend'
  ];

  function getStyles(tag, inquiryForm, theme) {
    return {
      fontWeight:
      inquiryForm.tags.indexOf(tag) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    };
  }
  function handleChange(event) {
    const {
      target: { value },
    } = event;
    inquiryForm.tags.push(
      typeof value === 'string' ? value.split(',') : value,
    );
  }

  return <div className={styles.Home}>
    <h1>Contact Us</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id="outlined-basic" 
        label="First Name" 
        variant="outlined" 
        value={inquiryForm.firstName}
        onChange={(e) => 
          setInquiryForm({ ...inquiryForm, firstName: e.target.value })} 
      />
      <TextField 
        id="outlined-basic" 
        label="Last Name" 
        variant="outlined"
        value={inquiryForm.lastName}
        onChange={(e) =>
          setInquiryForm({ ...inquiryForm, lastName: e.target.value })}
      />
      <TextField 
        id="outlined-basic" 
        label="Email" 
        variant="outlined" 
        value={inquiryForm.email}
        onChange={(e) =>
          setInquiryForm({ ...inquiryForm, email: e.target.value })}
      />
      <TextField
        id="outlined-textarea"
        label="Inquiry"
        placeholder="Placeholder"
        multiline
        maxRows={6}
        value={inquiryForm.inquiry}
        onChange={(e) =>
          setInquiryForm({ ...inquiryForm, inquiry: e.target.value })}
      />
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={inquiryForm.tags}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="tags" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {tags.map((tag) => (
            <MenuItem
              key={tag}
              value={tag}
              style={getStyles(tag, inquiryForm, theme)}
            >
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  </div>;
}
