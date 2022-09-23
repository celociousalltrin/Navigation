import React from 'react';
import {useState} from "react";
import Home from "./Home";
import { useFormik, validateYupSchema } from 'formik';
import * as yup from "yup";

const Form = () => {
const [data,setData] = useState(null)

const formik = useFormik({
  initialValues:{
    firstName:"",
    email:"",
  },
  onSubmit:(cont)=>{
    setData(cont)
  },
  validationSchema:yup.object({
    firstName:yup.string()
    .max(10,"Maximum charaters reached")
    .required("Required"),
    email:yup.string()
    .required("Required")
    .email("Invalid email address")
  })
})

  return (
    <div>
      {data === null ? (
        <div>
          <form onSubmit={formik.handleSubmit}>
          <input type="text" placeholder='name...' id="firstName" name="firstName"
          value={formik.values.firstName} onChange={formik.handleChange}
          onBlur={formik.handleBlur}></input>
          {formik.touched.firstName && formik.errors.firstName ? <p>formik.errors.firstName</p> : null}

          <input type="email" placeholder='email...' id="email" name="email"
          value={formik.values.email} onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          ></input>
          {formik.touched.email && formik.errors.email ? <p>formik.errors.email</p> : null}

          <button type="submit">submit</button>
          </form>
          </div>
      ) : (
        <Home />
      )}
    </div>
  )
}

export default Form;