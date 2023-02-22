import React, { useState } from "react";

// THIS FUNCTION IS USE TO HANDLE ALL THE INPUT ON ANY FORM
// 1) import this function ex. import useForm from '../../components/useForm'
// 2) add  const {values, setValues, handleInputChanges} = useForm(intitalFValue)
// 3) use like
//              <TextField
//                  variant="outlined"
//                  label="Full name"
//                  name="fullName"
//                  value={values.fullName}
//                  onChange={handleInputChanges}
//              />

export function useForm(intitalFValue) {
   const [values, setValues] = useState(intitalFValue);

   const handleInputChanges = (e) => {
      const { name, value } = e.target;
      setValues({
         ...values,
         [name]: value,
      });
   };

   return {
      values,
      setValues,
      handleInputChanges,
   };
}

//THIS IS THE ACTUAL GENERIC FORM TO BE USE

export function Form(props) {
   return <form autoComplete="off">{props.children}</form>;
}
