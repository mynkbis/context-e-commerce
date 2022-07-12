import React, { useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import DataContext from '../context/context';
import { useNavigate } from 'react-router-dom';

const CheckOutPage = () => {
const { darkMode} = useContext(DataContext);
  const navigate=useNavigate()
    const price=localStorage.getItem("total")
  return (
      <div style={{display:"flex", flexWrap:"wrap", height:"100vh", justifyContent:"space-around"}} id={darkMode ? "dark" : "light"}>
           <div >
          <Formik initialValues={{ email: '',address:'', name:'', phoneNumber:'', alterNo:'', }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
             setSubmitting(false);
           localStorage.clear()
           navigate('/payment')
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
                  <Form>
                      <div>
         <label htmlFor="firstName">First Name</label>
         <Field name="firstName" type="text" />
                              <ErrorMessage name="firstName" />
                              </div>
 <div>   <label htmlFor="lastName">Last Name</label>
         <Field name="lastName" type="text" />
         <ErrorMessage name="lastName" />
 </div>
      
                              <div>
         <label htmlFor="email">Email Address</label>
         <Field name="email" type="email" />
         <ErrorMessage name="email" />

</div>                              <div>
        <label htmlFor="phoneNumber">PhoneNumber</label>
         <Field name="phoneNumber" type="integer" />
                              <ErrorMessage name="phoneNumber" />
                              </div>
                    <div>  
        <label htmlFor="address">Address</label>
         <Field name="address" type="text" />
         <ErrorMessage name="address" />
 </div>
 
                          
                          <span>Total Cart Amount: ${price}</span>
                          <button type="submit">Submit</button>
       </Form>
                  )}
                  
          </Formik>
          </div>
          
      </div>
  )
}

export default CheckOutPage