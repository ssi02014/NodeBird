import React, { useState, useCallback } from 'react';

type ReturnType<T> = [
  T,
  ((e: any) => void),
  (() => void)
];

const useInput = <T>(initialValue: T):ReturnType<T>  => {
  const [formValues, setFormValues] = useState<T>(initialValue);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }, [formValues]);

  const onReset = useCallback(() => {
    setFormValues(initialValue);
  }, []);

  return [ formValues, onChange, onReset ];
} 

export default useInput;