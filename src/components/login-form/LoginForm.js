import { useState } from "react";

import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { Form, Formik } from "formik";
import * as yup from "yup";

import { userActions } from "../../store/user-action";
import { Button } from "../button";
import { Loader } from "../loader";

import axios from "axios";

import "./login-form.scss";
import { FormikInput } from "../formk-input";
import { axiosInstans } from "../../services";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleFormSubmit = (values) => {
    const user = {
      email: values.email,
      password: values.password,
    }
    setLoading(true)

    axios({
      url: "http://167.235.158.238:3001/login",
      method: "POST",
      data: user,

    })
      .then(({ data }) => {
        dispatch(userActions.setUser(data))
        axiosInstans.defaults.headers.Authorization = `Bearer ${data.accessToken}`
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.accessToken}`
        navigate(location.state?.redirect || "/")
      })
      .catch((err) => setError(err.response.data))
      .finally(() => setLoading(false))
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className="login-form">
      <div className="login-form__inner">
        <h2 className="login-form__title">Login</h2>

        <Formik
          initialValues={{
            email: "nurulloh23@gmail.com",
            password: "nurulloh23",
          }}

          validationSchema={yup.object().shape({
            email: yup.string().required("must be filled"),
            password: yup.string().required("must be filled")

          })}

          validateOnChange={false}
          validateOnBlur={false}
          validateOnMount={true}
          onSubmit={handleFormSubmit}
        >
          {
            () => (
              <Form className="login-form__form" >
                <div>
                  <FormikInput name="email" type="email" description="Email" />
                  <FormikInput name="password" type="password" description="Password" />
                </div>

                <div className="login-form__button">
                  <Button type="submit">Login</Button>
                </div>

                <span className="login-form__error">{error}</span>
              </Form>

            )
          }
        </Formik>
      </div>
    </div>

  )
}