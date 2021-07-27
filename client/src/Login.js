import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import Banner from "./components/Sidebar/Banner";
import { useStyles } from "./Signup";

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
      <Grid container item xs={12} sm={8} md={7} className={classes.gridForm}>
        <Grid container className={classes.switchTap} spacing={2}>
          <Grid item>
            <Typography color="secondary" variant="caption">
              Need to register?
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              className={classes.switchIcon}
              size="large"
              onClick={() => history.push("/register")}
            >
              Register
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.form} direction="column">
          <form onSubmit={handleLogin}>
            <Typography variant="h5" className={classes.heading}>
              <strong>Welcome back!</strong>
            </Typography>
            <Grid>
              <FormControl margin="normal" required>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  className={classes.textField}
                />
              </FormControl>
            </Grid>
            <FormControl margin="normal" required>
              <TextField
                label="password"
                aria-label="password"
                type="password"
                name="password"
                className={classes.textField}
                InputProps={{
                  endAdornment: (
                    <Typography
                      position="end"
                      color="primary"
                      variant="caption"
                    >
                      Forgot?
                    </Typography>
                  ),
                }}
              />
            </FormControl>
            <Grid>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                className={classes.button}
              >
                Login
              </Button>
            </Grid>
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
