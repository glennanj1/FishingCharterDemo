import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';

export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CalendarPicker
      label="Fishing Calendar Picker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
       />
    </LocalizationProvider>
  );
}