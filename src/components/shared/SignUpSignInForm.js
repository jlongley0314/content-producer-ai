import { Alert, Box, Button, Link, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signInUser, signUpUser } from "../../api/authentication";
import { AppContext } from "../../contexts/app/context";

function SignUpSignInForm({ signUp }) {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();

  async function onSubmit(data) {
    try {
      const results = signUp ? await signUpUser(data) : await signInUser(data);
      if (results) {
        dispatch({ type: "setIsLoggedIn", payload: true });
        navigate("/content-producer");
      }
    } catch (e) {
      console.log("error", e);
    }
  }

  const signInButton = (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        navigate("/sign-in");
      }}
      underline="none"
    >
      Sign in.
    </Link>
  );

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{
        backgroundColor: "rgb(0, 116, 246)",
        height: "100vh",
        width: "100vw",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={5}
          style={{
            backgroundColor: "white",
            width: "30%",
            borderRadius: 20,
            minWidth: 400,
          }}
        >
          <Typography variant="h4" gutterBottom style={{ fontWeight: "bold" }}>
            {signUp ? "Sign Up" : "Sign In"}
          </Typography>
          {signUp && (
            <>
              <Controller
                name="firstName"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    style={{ marginTop: 15, width: "100%" }}
                    required
                    size="small"
                    label="First Name"
                    variant="standard"
                    {...field}
                  />
                )}
              />
              <Controller
                name="lasttName"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    style={{ marginTop: 15, width: "100%" }}
                    required
                    size="small"
                    label="Last Name"
                    variant="standard"
                    {...field}
                  />
                )}
              />
            </>
          )}
          <Controller
            name="emailAddress"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <TextField
                style={{ marginTop: 15, width: "100%" }}
                required
                size="small"
                label="Email Address"
                variant="standard"
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <TextField
                style={{ marginTop: 15, width: "100%" }}
                required
                size="small"
                label="Password"
                type="password"
                variant="standard"
                {...field}
              />
            )}
          />
          <Button
            style={{ marginTop: 15, width: "100%" }}
            type="submit"
            variant="contained"
          >
            Sign Up
          </Button>
          {signUp && (
            <Box
              width="100%"
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              alignItems="center"
              mt={2}
            >
              <Typography
                variant="body2"
                gutterBottom
                style={{ marginBottom: 0, marginRight: 5 }}
              >
                Already have an account?
              </Typography>
              {signInButton}
            </Box>
          )}
        </Box>
      </form>
    </Box>
  );
}

export default SignUpSignInForm;
