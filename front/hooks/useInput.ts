import React, { useState, useCallback } from 'react';

interface InitialValue {
  id?: string;
  nickname?: string;
  password?: string;
}

const useInput = (initialValue: InitialValue) => {
  const [formValues, setFormValues] = useState(initialValue);

  const onChange = useCallback((e) => {
    const { name, value, checked } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }, [formValues]);

  return { formValues, onChange };
} 

export default useInput;