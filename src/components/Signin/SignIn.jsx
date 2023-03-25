import styled from "@emotion/styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { instance } from "../../GetApi";

export const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [erroLogin, setErroLogin] = useState("");

  const handleSubmit = () => {
    instance
      .post("users", {
        user: {
          username: userName,
          email: email,
          password: password,
        },
      })
      .then((res) => {
        navigate("/home");
        sessionStorage.setItem("userToken", res.data.user.token);
      })
      .catch((err) =>
        setErroLogin("UserName or Email has already been taken.Try Again!!")
      );
  };

  const onEnter = (e) => {
    e.preventDefault();
    if (e.code !== "Enter") {
      return;
    }
    handleSubmit();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Boxs>
        <ThemeProvider theme={theme}>
          <Box
            onKeyUp={onEnter}
            // component="form"
            sx={{
              backgroundColor: "rgba(0,0,0,0.75)",
              height: "60%",
              width: { xs: "50%", md: "20%" },
              padding: "60px 68px  40px 68px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            noValidate
            autoComplete="off"
          >
            <Typography
              fontWeight={600}
              color="white"
              variant="h4"
              component="h4"
            >
              Sign In
            </Typography>

            <Typography mt={2} color="red">
              {erroLogin}
            </Typography>

            <Box my={5}>
              <TextField
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                sx={{
                  backgroundColor: "grey",
                  width: "100%",
                  borderRadius: "4px",
                  mb: 3,
                }}
                type="text"
                label="User Name"
                id="filled-size-small-username"
                variant="filled"
                size="small"
              />
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                sx={{
                  backgroundColor: "grey",
                  width: "100%",
                  borderRadius: "4px",
                  mb: 3,
                }}
                type="email"
                label="Email"
                id="filled-size-small"
                variant="filled"
                size="small"
              />

              <FormControl
                sx={{
                  backgroundColor: "grey",
                  width: "100%",
                  borderRadius: "4px",
                }}
                //   fullWidth
                variant="filled"
              >
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  size="small"
                  id="filled-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>

            <Button
              onClick={handleSubmit}
              sx={{ width: "100%" }}
              variant="contained"
              color="error"
            >
              Login
            </Button>

            <Box display="flex" alignItems="center" mt={3}>
              <Typography color="grey" mr={0.5}>
                Have an account?
              </Typography>
              <Link
                onClick={() => navigate("/login")}
                component="button"
                variant="body1"
                underline="hover"
              >
                Login now.
              </Link>
            </Box>
          </Box>
        </ThemeProvider>
      </Boxs>
    </div>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#ffffff",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

const Boxs = styled("div")(() => ({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  //   paddingTop: "50px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/359bf2ce-0a8c-4739-9ef0-3d7a84353b79/VN-vi-20230320-popsignuptwoweeks-perspective_alpha_website_small.jpg)`,
}));
