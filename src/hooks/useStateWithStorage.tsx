import { useState, useEffect } from 'react';

export default function useStateWithStorage(key:string, defaultValue: unknown) {
  const rawValue = localStorage.getItem(key);
  
  const storedValue = rawValue ? JSON.parse(rawValue) : defaultValue;
  
  const [value, setValue] = useState(storedValue);
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}