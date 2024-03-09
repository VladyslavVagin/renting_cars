import { Formik } from "formik";
import { useState } from "react";
import { logIn } from "../../redux/auth/operations";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { BackgroundForm, FormSignup, InputStyled, LabelForm, LabelCheckbox, Checkbox, SubmitBtn } from "components/Signup/Signup.styled";

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
    const dispatch = useDispatch();

    const handleSubmitLogin = (dataForm, { resetForm }) => {
      dispatch(logIn(dataForm));
      resetForm();
    };

  return (
    <BackgroundForm>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitLogin}
        validationSchema={schema}
      >
        <FormSignup>
          <h2>Login form</h2>
          <LabelForm htmlFor="email">
          Email:
            <InputStyled
              type="email"
              name="email"
              required
              aria-label="Input for type your name"
            />
          </LabelForm>
          <LabelForm htmlFor="password">
           Password:
            <InputStyled
              type={showPassword ? "text" : "password"}
              name="password"
              required
              aria-label="Input for type your password"
            />
          </LabelForm>
          <LabelCheckbox htmlFor="toggle">
            <Checkbox
              type="checkbox"
              name="toggle"
              onChange={() => setShowPassword(!showPassword)}
              checked={showPassword}
              aria-label="Checkbox for show or hide your password. If checked - password will be shown."
            />{" "}
            {showPassword ? "Hide password" : "Show password"}
          </LabelCheckbox>
          <SubmitBtn
            type="submit"
            aria-label="Button for submit login form"
            title="Confirm login"
          >
         Login
          </SubmitBtn>
        </FormSignup>
      </Formik>
    </BackgroundForm>
  );
};

export default Login;
