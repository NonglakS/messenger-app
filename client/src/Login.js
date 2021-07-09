import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
  Paper,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import Banner from "./components/Sidebar/Banner";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
  },
  form: {
    // justifyItems: "center"
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }
  return (
    <Grid container justify="center" className={classes.root}>
      <Banner />
      <Grid container xs={12} sm={8} md={7} direction="row">
        <Grid container spacing={3}  alignItems="center">
          <Grid item>
            <Typography>Need to register?</Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" size="large" onClick={() => history.push("/register")} >Register</Button>
          </Grid>
        </Grid>
          <form onSubmit={handleLogin}>
        <Grid>
            <Typography variant="h5">
              <strong>Welcome back!</strong>
            </Typography>
            <Grid>
              <FormControl margin="normal" required>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <FormControl margin="normal" required>
              <TextField
                label="password"
                aria-label="password"
                type="password"
                name="password"
              />
            </FormControl>
            <Grid>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
              >
                Login
              </Button>
            </Grid>
        </Grid>
          </form>
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
