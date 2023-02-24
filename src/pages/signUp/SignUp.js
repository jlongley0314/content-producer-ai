import { Box, Button, Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

function SignUp() {
    const { handleSubmit, control } = useForm();

    function onSubmit() {

    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{backgroundColor: "rgb(0, 116, 246)", height: "100vh", width: "100vw"}}
        >
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={5}
                    style={{ backgroundColor: "white", width: "30%" }}
                >
                    <Controller
                        name="firstName"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={
                            ({ field }) => <TextField style={{marginTop: 15}} required size="small" label="First Name" variant="standard" {...field} />
                        }
                    />
                    <Controller
                        name="lasttName"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={
                            ({ field }) => <TextField style={{marginTop: 15}} required size="small" label="Last Name" variant="standard" {...field} />
                        }
                    />
                    <Controller
                        name="emailAddress"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={
                            ({ field }) => <TextField style={{marginTop: 15}} required size="small" label="Email Address" variant="standard" {...field} />
                        }
                    />
                    <Controller
                        name="password"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={
                            ({ field }) => <TextField style={{marginTop: 15}} required size="small" label="Password" variant="standard" {...field} />
                        }
                    />
                    <Button style={{marginTop: 15}} type="submit" variant="contained">Sign Up</Button>
                </Box>
            </form>
        </Box>
    )
}

export default SignUp;