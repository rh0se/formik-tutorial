import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.


export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email address").required("Required"),
    age: yup.number().positive().integer().required("Required"),
    password: yup.string().min(8, "Password must be at least 8 characters long").matches(passwordRules, {message: "Please create a stronger password"}).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Required"),
});