import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "../components/Form";
import { InputOutlined } from "../components/InputOutlined";
import { PrimaryButton } from "../components/PrimaryButton";
import { registrate } from "../redux/store/client/loginReducer";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(4, "Password is too small")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Invalid")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  firstName: yup.string().required("Invalid"),
  lastName: yup.string().required("Invalid"),
  userName: yup.string().required("Invalid"),
  login: yup.string().email("Invalid").required("Invalid"),
});

const RegistrForm = (props) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      userName: "",
      login: "",
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(registrate(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} style={{ paddingBottom: "20px" }}>
      <Container
        sx={{
          width: "557px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingLeft: "68px",
          paddingRight: "68px",
        }}
        disableGutters={true}
      >
        <Container
          sx={{ display: "flex", justifyContent: "space-between" }}
          disableGutters={true}
        >
          <InputOutlined
            {...register("firstName", { required: true })}
            id="firstName"
            sx={{
              borderColor: errors?.firstName?.message ? "#FC6E50" : null,
              width: "48%",
              color: "white",
            }}
            type="text"
            name="firstName"
            placeholder="First Name"
          />

          <InputOutlined
            {...register("lastName", { required: true })}
            id="lastName"
            sx={{
              borderColor: errors?.lastName?.message ? "#FC6E50" : null,
              width: "48%",
              color: "white",
            }}
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
        </Container>

        <InputOutlined
          {...register("userName", { required: true })}
          id="userName"
          sx={{
            borderColor: errors?.userName?.message ? "#FC6E50" : null,
            color: "white",
          }}
          type="text"
          name="userName"
          placeholder="User Name"
        />

        <InputOutlined
          {...register("login", { required: true })}
          id="login"
          sx={{
            borderColor: errors?.email?.message ? "#FC6E50" : null,
            color: "white",
          }}
          type="text"
          name="login"
          placeholder="Email"
        />

        <InputOutlined
          {...register("password", { required: true })}
          id="password"
          sx={{
            borderColor: errors?.password?.message ? "#FC6E50" : null,
            color: "white",
          }}
          type="password"
          name="password"
          placeholder="Password"
        />

        <InputOutlined
          {...register("confirmPassword", { required: true })}
          id="confirmPassword"
          sx={{
            borderColor: errors?.confirmPassword?.message ? "#FC6E50" : null,
            color: "white",
          }}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />

        <PrimaryButton
          sx={{ color: "#989898", height: "56px", width: "264px" }}
        >
          REGISTER
        </PrimaryButton>
      </Container>
    </Form>
  );
};

export default RegistrForm;
