import {STORAGE_NAME} from "./constants/localStorage";

export const getLocalStorageItems = () => JSON.parse(localStorage.getItem(STORAGE_NAME)) || [];
export const setLocalStorageItems = (items) => localStorage.setItem(STORAGE_NAME, JSON.stringify(items));