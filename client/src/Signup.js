import "./index.css";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import Banner from "./components/Sidebar/Banner";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { shadows } from "@material-ui/system";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
  },
  switchTap: {
    justifyContent: "flex-end",
    margin: "3% 5%",
  },
  switchIcon: {
    color: "#3A8DFF",
    backgroundColor: "white",
    width: "120%",
  },
  form: {
    alignContent: "center",
    textAlign: "center",
    // margin: "2% 0",
    padding: "2% 0",
  },
  heading: {
    textAlign: "left",
    margin: "0 0 2% 0",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Banner />
      <Grid container xs={12} sm={8} md={7} style={{ height: "50%" }}>
        <Grid container className={classes.switchTap} spacing={2}>
          <Grid item style={{ margin: "1%" }}>
            <Typography color="secondary" variant="caption">
              Already have an account?
            </Typography>{" "}
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              className={classes.switchIcon}
              size="large"
              onClick={() => history.push("/login")}
            >
              Login
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.form} direction="column">
          <form onSubmit={handleRegister}>
            <Typography variant="h5" className={classes.heading}>
              <strong>Create an account.</strong>
            </Typography>
            <Grid item>
              <FormControl style={{ margin: "1% 0" }}>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  fullWidth={true}
                  required
                  style={{ width: 300 }}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl style={{ margin: "1% 0" }}>
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  required
                  style={{ width: 300 }}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl
                error={!!formErrorMessage.confirmPassword}
                style={{ margin: "1% 0" }}
              >
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  required
                  style={{ width: 300 }}
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl
                error={!!formErrorMessage.confirmPassword}
                style={{ margin: "1% 0" }}
              >
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  required
                  style={{ width: 300 }}
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"
              style={{ margin: "5% 0 0 0", width: "50%" }}
            >
              Create
            </Button>
          </form>
        </Grid>
        {/* </Box> */}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
