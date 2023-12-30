import { useState, useEffect } from "react";

function localStorageKullan(key, baslangicDegeri) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : baslangicDegeri;
    } catch (error) {
      console.log(error);
      return baslangicDegeri;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default localStorageKullan;
