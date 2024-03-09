import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as yup from "yup";
// import { useDispatch } from "react-redux";

const initialValues = {
  email: "",
  password: "",
};

const schema = yup.object().shape({
  email: yup.string().min(5).required(),
  password: yup.string().min(6).max(16).required(),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  //   const dispatch = useDispatch();

  //   const handleSubmitLogin = (dataForm, { resetForm }) => {
  //     dispatch(logIn(dataForm));
  //     resetForm();
  //   };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        // onSubmit={handleSubmitLogin}
        validationSchema={schema}
      >
        <Form>
          <h2>Login form</h2>
          <label htmlFor="email">
            <span>&#42;</span>Email:
            <Field
              type="email"
              name="email"
              required
              aria-label="Input for type your name"
            />
          </label>
          <label htmlFor="password">
            <span>&#42;</span>Password:
            <Field
              type={showPassword ? "text" : "password"}
              name="password"
              required
              aria-label="Input for type your password"
            />
          </label>
          <label htmlFor="toggle">
            <Field
              type="checkbox"
              name="toggle"
              onChange={() => setShowPassword(!showPassword)}
              checked={showPassword}
              aria-label="Checkbox for show or hide your password. If checked - password will be shown."
            />{" "}
            {showPassword ? "Hide password" : "Show password"}
          </label>
          <button
            type="submit"
            aria-label="Button for submit login form"
            title="Confirm login"
          >
         Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
