import "./index.css";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import Banner from "./components/Sidebar/Banner";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  gridForm: {
    height: "fit-content",
  },
  switchTap: {
    justifyContent: "flex-end",
    margin: theme.spacing(2, 4),
    alignItems: "center",
  },
  switchIcon: {
    color: theme.palette.primary.main,
    backgroundColor: "white",
    width: "120%",
  },
  form: {
    alignContent: "center",
    textAlign: "center",
    padding: theme.spacing(2, 4),
  },
  heading: {
    textAlign: "left",
    margin: theme.spacing(5, 0, 2, 0),
  },
  textField: {
    width: 300,
  },
  button: {
    width: "50%",
    margin: theme.spacing(3, 0),
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
      <Banner />
      <Grid container item xs={12} sm={8} md={7} className={classes.gridForm}>
        <Grid container className={classes.switchTap} spacing={2}>
          <Grid item>
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
              <FormControl>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  required
                  className={classes.textField}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  required
                  className={classes.textField}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl error={!!formErrorMessage.confirmPassword}>
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  required
                  className={classes.textField}
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl error={!!formErrorMessage.confirmPassword}>
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  required
                  className={classes.textField}
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
              className={classes.button}
            >
              Create
            </Button>
          </form>
        </Grid>
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
