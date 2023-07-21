import "./Login.css";

import useForm from "../../hook/useForm";
import { useState } from "react";

import validator from "validator";
import { Link, useNavigate } from "react-router-dom";

const validateForm = (form) => {
  const error = { name: "", email: "", password: "" };

  if (form === undefined) {
    error.email = "El campo es requerido";
    error.password = "El campo es requerido";
    error.name = "El campo es requerido";
  } else {
    if (form?.name === undefined || validator.isEmpty(form?.name)) {
      error.name = "El campo es requerido";
    }
    if (isNaN(form?.name) == false) {
      error.name = "Nombre solo acepta letras";
    }

    if (form?.email === undefined || validator.isEmpty(form?.email)) {
      error.email = "El campo es requerido";
    } else if (!validator?.isEmail(form?.email)) {
      error.email = "Correo incorrecto";
    }
    if (form.password === undefined || validator.isEmpty(form?.password)) {
      error.password = "El campo es requerido";
    }
    if (form.password?.length < 8) {
      error.password = "Debe tener al menos 8 caracteres";
    }
  }
  return error;
};

const Register = () => {
  const initialForm = { email: "", password: "" };
  const [formError, setFormError] = useState({});
  const { form, handleChange } = useForm(initialForm);
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    const err = validateForm(form);
    if (err.email === "" && err.password === "") {
      navigate("/");
    } else {
      setFormError(err);
    }
  };

  const resetError = () => {
    setFormError({});
  };

  return (
    <div className="auth-container">
      <h1>Register</h1>
      <form
        className="login-form"
        onSubmit={(e) => {
          register(e);
        }}
      >
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Ingrese su nombre"
            onChange={(e) => handleChange(e)}
            onClick={() => resetError()}
          />
          <span className={` span-error ${formError.name ? "span-form" : ""}`}>
            {formError?.name}
          </span>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Ingrese su email"
            onChange={(e) => handleChange(e)}
            onClick={() => resetError()}
          />
          <span className={` span-error ${formError.email ? "span-form" : ""}`}>
            {formError?.email}
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Ingrese su contraseña"
            onChange={(e) => handleChange(e)}
            onClick={() => resetError()}
          />
          <span
            className={` span-error ${formError.password ? "span-form" : ""}`}
          >
            {formError?.password}
          </span>
        </div>
        <input className="btn" type="submit" value={"Entrar"} />
        <p className="form-change">
          Ya tienes cuenta?
          <Link to={"/auth/login"}>
            <strong> Ingresa</strong>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
