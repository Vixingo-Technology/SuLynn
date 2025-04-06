import React from "react";
import Card from "@mui/material/Card";
import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Snackbar,
    TextField,
    Typography,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { NavLink } from "react-router";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import { Visibility, VisibilityOff } from "@mui/icons-material";
function SignupForm() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Card
                elevation={5}
                sx={{
                    borderRadius: "12px",
                    minWidth: 275,
                    width: "100%",

                    p: { xs: 1, sm: "2rem" },
                    mt: 0,
                    pt: 0,
                    textAlign: "center",
                    backgroundColor: "background.default",
                }}
            >
                <CardContent>
                    <Typography
                        gutterBottom
                        // variant="h3"
                        sx={{
                            color: "text.primary",
                            fontSize: 32,
                            mt: 0,
                            mb: 4,
                            // fontFamily: "Roboto",
                        }}
                    >
                        Create an account
                    </Typography>
                    {/* <Typography
                        gutterBottom
                        sx={{
                            color: "text.secondary",
                            fontSize: 14,
                        }}
                    >
                        Lectus neque interdum mattis etiam morbi mauris ac.{" "}
                    </Typography>
                    <Typography variant="h5" component="div">
                        asasas
                    </Typography> */}
                    <TextField variant="outlined" fullWidth label="Email" />

                    <FormControl
                        sx={{ width: "100%", mt: 2 }}
                        variant="outlined"
                    >
                        <InputLabel htmlFor="outlined-adornment-password">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        color="secondary"
                                        aria-label={
                                            showPassword
                                                ? "hide the password"
                                                : "display the password"
                                        }
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>

                    <Typography
                        gutterBottom
                        sx={{
                            color: "text.secondary",
                            fontSize: 14,
                            mt: "1rem",
                        }}
                    >
                        By continuing, you agree to the{" "}
                        <NavLink>Self Service PSS</NavLink> and{" "}
                        <NavLink> Privacy Policy</NavLink>.
                    </Typography>
                    <NavLink to={"/dashboard"}>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                borderRadius: "50px",
                                my: "1rem",
                                px: "2rem",
                            }}
                        >
                            Continue
                        </Button>
                    </NavLink>
                    <Typography variant="body2">
                        Already have an account?{" "}
                        <NavLink to={"/auth/login"}>Login</NavLink>
                    </Typography>
                    <Typography
                        gutterBottom
                        sx={{
                            color: "text.secondary",
                            fontSize: 14,
                            display: "flex",

                            alignItems: "center",
                            mt: "1rem",
                            "&::before": {
                                content: '""',
                                display: "inline-block",
                                width: "100%",
                                borderBottom: (theme) =>
                                    `1px solid ${theme.palette.text.secondary}`,
                                opacity: "30%",
                                margin: "0 10px",
                            },
                            "&::after": {
                                content: '""',
                                display: "inline-block",
                                width: "100%",
                                borderBottom: (theme) =>
                                    `1px solid ${theme.palette.text.secondary}`,
                                opacity: "30%",
                                margin: "0 10px",
                            },
                        }}
                    >
                        OR
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        flexDirection: "column",
                        gap: 2,
                        justifyContent: "center",
                        pb: "2rem",
                    }}
                >
                    <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<GoogleIcon />}
                    >
                        Continue with Google
                    </Button>
                    <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<GitHubIcon />}
                    >
                        Continue with GitHub
                    </Button>
                    <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<MicrosoftIcon />}
                    >
                        Continue with Microsoft
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}

export default SignupForm;
