import React from "react";

//El itemName solo es una nueva variable que remplaza a todos los todos_V1
export const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false)
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
      
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem)
        }
        setLoading(false)
       } catch (error) {
        setLoading(false)
        setError(true)
       }
    }, 2000)
  },[]);
  // let parsedTodos = JSON.parse(localStorageTodos)
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  console.log(item);
  return {
    item,
    saveItem,
    loading,
    error
  };
};
