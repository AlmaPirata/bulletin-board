import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import BulletinItem from "../BulletinItem/BulletinItem";
import {getLocalStorageItems, setLocalStorageItems} from "../../state";

const MainPage = () => {
  const [items, setItems] = useState(
    getLocalStorageItems()
  );
  useEffect(() => {
    setLocalStorageItems(items);
  }, [items]);

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  }

  let [readOnlyIdItem, setReadOnlyIdItem] = useState("");

  const saveChanges = (updatedState) => {
    setItems(items.map(item => (item.id === updatedState.id) ? updatedState : item));
  }

  const toggleReadOnly = (id, value) => {
    console.log(value)
    if(value) {
      setReadOnlyIdItem("")
    } else {
      setReadOnlyIdItem(id)
    }
  }
  useEffect(() => {},[readOnlyIdItem])

  return (
    <React.Fragment>
      <div className='bulletin-wrapper'>
        {items.map(item => {
            return (
                <BulletinItem
                  key={item.id}
                  item={item}
                  deleteItem={deleteItem}
                  toggleReadOnly={(value) => toggleReadOnly(item.id, value)}
                  saveChanges={saveChanges}
                  readOnly={readOnlyIdItem !== item.id}
                  // edit2={edit2}
                />
            );
          })}
      </div>
    </React.Fragment>
  );
}

export default MainPage;