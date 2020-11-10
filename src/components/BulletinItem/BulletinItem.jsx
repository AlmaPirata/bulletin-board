import React, {useState} from 'react';
import {CITIES} from "../../constants/cities";
import {TextField, TextareaAutosize, MenuItem, Select, Button} from "@material-ui/core";
import InputMask from "react-input-mask";

const BulletinItem = (props) => {

  const [bulletin, setBulletin] = useState({
    caption: props.item.caption,
    textBody: props.item.textBody,
    phone: props.item.phone,
    city: props.item.city
  });

  function onEditItem() {
    props.toggleReadOnly(false);
  }

  function onSaveChangesItem() {
    props.toggleReadOnly(true);
    props.saveChanges({
      ...bulletin,
      id: props.item.id
    });
  }

  const onDeleteItem = () => {
    props.deleteItem(props.item.id);
  }

  function onInputChange(e) {
    console.log(e)
    const { name, value } = e.target;
    setBulletin({
      ...bulletin,
      [name]: value
    });
  }

  function onCancelChangesItem() {
    setBulletin({
      caption: props.item.caption,
      textBody: props.item.textBody,
      phone: props.item.phone,
      city: props.item.city
    });
    props.toggleReadOnly(true)
  }

  return (
    <div className='bulletin'>
      <TextField value={bulletin.caption} name="caption" className="bulletin-input" onChange={onInputChange} InputProps={{readOnly: props.readOnly}}/>
      <TextField value={bulletin.textBody} multiline rowsMax="2" name="textBody" className="bulletin-input" onChange={onInputChange} InputProps={{readOnly: props.readOnly}} />
      <InputMask name="phone" mask="+(9) 999 999 99 99" value={bulletin.phone}  onChange={onInputChange} InputProps={{readOnly: props.readOnly}}>
        <TextField className="bulletin-input" placeholder='+(7) 123 456 78 90'/>
      </InputMask>
      <Select value={bulletin.city} name="city" className="bulletin-select bulletin-input" onChange={onInputChange} disabled={props.readOnly} >
        {CITIES.map((city, i) => <MenuItem key={i} value={city}>{city}</MenuItem>)}
      </Select>
      <div>
        {props.readOnly
          ? <Button onClick={onEditItem}>Редактировать</Button>
          : <React.Fragment>
              <Button onClick={onCancelChangesItem}>Отменить</Button>
              <Button onClick={onSaveChangesItem}>Сохранить</Button>
            </React.Fragment>
        }
        <Button onClick={onDeleteItem}>Удалить</Button>
      </div>
    </div>
  );
}

export default BulletinItem;