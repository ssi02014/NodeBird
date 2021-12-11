import React, { useState, useCallback } from 'react';

interface InitialValue {
  id?: string;
  email?: string;
  nickname?: string;
  password?: string;
  commentText?: string;
  text?: string;
}

type ReturnType = [InitialValue, ((e:any) => void), (() => void)];

const useInput = (initialValue: InitialValue):ReturnType  => {
  const [formValues, setFormValues] = useState<InitialValue>(initialValue);

  const onChange = useCallback((e) => {
    const { name, value, checked } = e.target;

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