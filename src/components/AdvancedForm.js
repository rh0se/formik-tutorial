import { Formik, Form, Field } from "formik";
import CustomInput from "./Custominput";

const AdvancedForm = () => {
  return (
    <Formik initialValues={{ username: 'jared' }}>
    {props => (
      <Form onSubmit={props.handleSubmit}>
        <CustomInput 
          label="Username"
          name="username"
          type="text"
          placeholder= "Enter your username"
        />
    
    {/* <input
          type="text"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.name}
          name="name"
        />*/}
        <button type="submit">Submit</button>
      </Form>
    )}
    </Formik>
  );
};
export default AdvancedForm;
