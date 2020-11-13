import React, {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {getLocalStorageItems, setLocalStorageItems} from "../../state";
import {CITIES} from "../../constants/cities";
import { Button, MenuItem, InputLabel, Select, TextField, Snackbar } from '@material-ui/core';
import InputMask from "react-input-mask";
import MuiAlert from '@material-ui/lab/Alert';


const CreatePage = () => {
  //snackbar
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };
  //close snackbar

  const [item, setItem] = useState({
    id: uuidv4(),
    caption: '',
    textBody: '',
    phone: '',
    city: ''
  });
  const [items, setItems] = useState(
    getLocalStorageItems()
  );

  useEffect(() => {
    setLocalStorageItems(items);
  }, [items]);

  const onInputPhone = (e) => {
    e.target.reportValidity();
  }

  const onChange = (e) => {
    let {name, value} = e.target;

    setItem({
      ...item,
      [name]: value
    });
  }

  const onClearCitySelect = () => {
    setItem({
      ...item,
      city: ''
    });
  }

  onsubmit = (e) => {
    e.preventDefault();

    setItem({
        ...item,
        id: uuidv4(),
        caption: item.caption,
        textBody: item.textBody,
        phone: item.phone,
        city: item.city,
      }
    );
    setItems((items) => [...items, item]);

    setOpenSnackbar(true);
    setItem({
      id: uuidv4(),
      caption: '',
      textBody: '',
      phone: '',
      city: ''
    });
  }

  return (
    <React.Fragment>
      <form className='form'>
        <div className='form-wrapper'>
          <div className='form-row'>
            <TextField name="caption" className='input form-caption' type="text" variant="outlined" value={item.caption} onChange={onChange} required label='Заголовок'/>
            <div className='input-description'>Обязательное поле <br/>Не более 140 символов</div>
          </div>
          <div className='form-row'>
            <TextField name="textBody" className="input form-text-body" multiline variant="outlined" inputProps={{maxLength: 300}}
                       rows={4} value={item.textBody} onChange={onChange} required />
            <div className='input-description'>Обязательное поле <br/>Не более 300 символов</div>
          </div>
          <div className='form-row'>
            <InputMask name="phone" mask="+(9) 999 999 99 99" value={item.phone}  onInput={onInputPhone} onChange={onChange}>
              <TextField className='input form-phone' variant="outlined" placeholder='+(7) 123 456 78 90'/>
            </InputMask>
            <div className='input-description'>Обязательное поле</div>
          </div>
          <div className='form-row'>
            <div className='input'>
              <InputLabel id="form-city-label">Город</InputLabel>
              <Select name="city" labelId='form-city-label' id='form-city' className='form-city' variant="outlined" value={item.city} onChange={onChange}>
                <MenuItem value=''>Выберите город</MenuItem>
                {CITIES.map((city, i) => <MenuItem key={i} value={city}>{city}</MenuItem>)}
              </Select>
              <div className={`close-select ${(item.city === '') ? "hidden" : ""}`} onClick={onClearCitySelect}/>
            </div>
          </div>
          <Button className='submit-form-button' type="submit" variant="contained" >Добавить</Button>
        </div>
        <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            This is a success message!
          </Alert>
        </Snackbar>
      </form>
    </React.Fragment>
  );
}

export default CreatePage;