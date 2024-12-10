import { Formik, Form} from "formik";
import CustomInput from "./Custominput";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { advancedSchema } from "../schemas";


const onSubmit = async(values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};
const AdvancedForm = () => {
  return (
    <Formik initialValues={{ username: "", jobType: "", acceptedTo: ""}} validationSchema={advancedSchema} onSubmit={onSubmit}>
    {(isSubmitting) => (
      <Form>
        <CustomInput 
          label="Username"
          name="username"
          type="text"
          placeholder= "Enter your username"
        />
        <CustomSelect 
        label= "Job Type" 
        name="jobType" 
        placeholder= "Please select your job type">
           <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
        </CustomSelect>

        <CustomCheckbox 
        type="checkbox"
          name="acceptedTo"
        />
    

        <button disabled={isSubmitting} type="submit">Submit</button>
      </Form>
    )}
    </Formik>
  );
};
export default AdvancedForm;
