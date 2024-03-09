import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { register } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { BackgroundForm, Checkbox, FormSignup, InputStyled, LabelCheckbox, LabelForm, SubmitBtn } from "./Signup.styled";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const schema = yup.object().shape({
  name: yup.string().min(1).max(24).required(),
  email: yup.string().min(5).required(),
  password: yup.string().min(6).max(16).required(),
});

const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [showPassword, setShowPassword] = useState(false);
  console.log(user);

  const handleSubmitRegistration = (dataForm, { resetForm }) => {
    dispatch(register(dataForm));
    resetForm();
  };

  return (
    <BackgroundForm>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitRegistration}
        validationSchema={schema}
      >
        <FormSignup>
          <h2>Registration form</h2>
          <LabelForm htmlFor="name">
            Name:
            <InputStyled
              type="text"
              name="name"
              required
              aria-label="Input for type your name from 1 to 24 symbols"
            />
            <p>(1 - 24) symbols</p>
          </LabelForm>
          <LabelForm htmlFor="email">
            Email:
            <InputStyled
              type="email"
              name="email"
              required
              aria-label="Input for type your email. After it will use for login in app."
            />
          </LabelForm>
          <LabelForm htmlFor="password">
            Password:
            <InputStyled
              type={showPassword ? "text" : "password"}
              name="password"
              required
              aria-label="Input for type your password. After it will use for login in app."
            />
            <p>(6 - 16) symbols</p>
          </LabelForm>
          <LabelCheckbox htmlFor="toggle">
            <Checkbox
              type="checkbox"
              name="toggle"
              onChange={() => setShowPassword(!showPassword)}
              checked={showPassword}
              aria-label="Checkbox for show or hide your password. If checked - password will be shown."
            />
            {showPassword ? "Hide password" : "Show password"}
          </LabelCheckbox>
          <SubmitBtn
            type="submit"
            aria-label="Button for submit registry form"
            title="Confirm register user"
          >
            Register
          </SubmitBtn>
        </FormSignup>
      </Formik>
    </BackgroundForm>
  );
};

export default Signup;
