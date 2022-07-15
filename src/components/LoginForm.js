import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "../components/Form";
import { InputStandart } from "../components/InputStandart";
import { PrimaryButton } from "../components/PrimaryButton";
import { Error } from "../components/Error";
import { logIn } from "../redux/store/client/loginReducer";

const schema = yup.object().shape({
  login: yup.string().required("Login is required"),
  password: yup
    .string()
    .min(4, "Password is too small")
    .required("Password is required"),
});

export const LoginForm = (props) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(logIn(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} style={{ paddingBottom: "20px" }}>
      <Container sx={{ width: "73%" }}>
        <InputStandart
          {...register("login", { required: true })}
          id="login"
          sx={{ color: "white" }}
          type="text"
          name="login"
          error={!!errors.login}
        />
        <Error>{errors?.login?.message}</Error>

        <InputStandart
          {...register("password", { required: true })}
          id="password"
          sx={{ color: "white" }}
          type="password"
          name="password"
          error={!!errors.password}
        />
        <Error>{errors?.password?.message}</Error>

        <PrimaryButton
          sx={{ color: "#989898", marginTop: "20px", height: "56px" }}
        >
          SIGN IN
        </PrimaryButton>
      </Container>
    </Form>
  );
};

export default LoginForm;
