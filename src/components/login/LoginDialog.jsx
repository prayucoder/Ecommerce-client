import React, { useState, useContext  } from 'react'
import { Dialog, Box, TextField, Typography, Button, styled } from "@mui/material";
import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';


const Component = styled(Box)`
    width: 90vh;
    height: 70vh;
`;

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 84%;
    width: 30%;
    padding: 45px 35px;

    & > p, & > h5 {
        color: #fff;
        font-weight: 600;
    }
`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex:1;
    & > div, & > button, & > p  {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;
const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 /20%);
`;

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`;

const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`


//..... styled components End here.....


//..... This is initial value part...

const accountInitialValues = {
    login: {
        view: 'login',
        heading: "Login",
        subHeading: "Get access to your Orders, Wishlist and Recommendations"
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: "Sign up with your mobile number to get started"
    }
}

const signupInitialValue = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: ""
}

const loginInitialValue = {
    username: "",
    password: ""
}

const LoginDialog = ({open, setOpen}) => {

    const [toggleAccount, setToggleAccount] = useState(accountInitialValues.login);
    const [signup, setSignup] = useState(signupInitialValue);
    const [login, setLogin] = useState(loginInitialValue);
    const [error, setError] = useState(false);

    const { setAccount } = useContext(DataContext);

    const handleClose =() => {
        setOpen(false)
        setToggleAccount(accountInitialValues.login);
        setError(false);
    }

    const toggleSignup = () => {
        setToggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e) =>{
        setSignup({...signup, [e.target.name]: e.target.value});
        
    }

    const signupUser = async () =>{
        let response =  await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }

    const onValueChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value});
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        console.log(response);
        if(response.status  === 200){
            handleClose();
            setAccount(response.data.data.firstname);
        }else{
            setError(true);
        }
    }

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxWidth: 'unset'}}}>
        <Component>
            <Box style={{display: "flex", height: "100%"}}>
                <Image>
                    <Typography variant='h5'>{toggleAccount.heading}</Typography>
                    <Typography style={{marginTop: 20}} >{toggleAccount.subHeading}</Typography>
                </Image>

                {
                    toggleAccount.view === 'login' ?
                    <Wrapper>
                        <TextField variant='standard' name="username" label="Enter Username" onChange={(e) => onValueChange(e)} />
                        { error && <Error>Please enter valid username or password</Error> }
                        <TextField variant='standard' name="password" label="Enter Password" onChange={(e) => onValueChange(e)} />
                        <Text>By continuing, you agree to flipkart's Terms of Use and Privacy Policy.</Text>
                        <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                        <Typography style={{textAlign: "center"}}>OR</Typography>
                        <RequestOTP>Request OTP</RequestOTP>
                        <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                    </Wrapper>

                    :

                    <Wrapper>
                        <TextField variant='standard' label="Enter Firstname" name='firstname' onChange={(e) => onInputChange(e)} />
                        <TextField variant='standard' label="Enter Lastname" name='lastname' onChange={(e) => onInputChange(e)} />
                        <TextField variant='standard' label="Enter Username" name='username' onChange={(e) => onInputChange(e)} />
                        <TextField variant='standard' label="Enter Email" name='email' onChange={(e) => onInputChange(e)} />
                        <TextField variant='standard' label="Enter Password" name='password' onChange={(e) => onInputChange(e)} />
                        <TextField variant='standard' label="Enter Phone" name='phone' onChange={(e) => onInputChange(e)} />
    
                        <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                        
                    </Wrapper>
                }
            </Box>
        </Component>
    </Dialog>
  )
}

export default LoginDialog