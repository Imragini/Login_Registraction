import { TextField, Button, Box, Alert } from "@mui/material"; 
import { useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";

const UserLogin = () => {
    const [error, setError] = useState({
        status: false,
        msg: '',
        type:'',
    })
    const navigate = useNavigate();
    const handleSubmit = (e)=> {
        e.preventDefault();
        const date = new FormData(e.currentTarget);
        const actualDate = {
            email : date.get('email'),
            password : date.get('password'),
        }
        
        if(actualDate.email && actualDate.password){
            console.log(actualDate)
            document.getElementById('login-form').reset()
            setError({status:true, msg:"Login Success", type:'success'}) 
            navigate('/dashboard')
        }
        else{
            setError({status:true, msg:"All Fields are Required", type:'error'}) 
        }
    }
  return (
    <>
      <Box component="form" noValidate sx={{ mt: 2 }} id="login-form" onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
        />
        <TextField
          margin="normal" required fullWidth
          id="password"  name="password" label="Enter Your Password" />
          <Box textAlign="center">
            <Button type="submit" variant="contained" sx={{mt:3, mb:2, px:5}}>Login</Button>
          </Box>
          <NavLink to='/SendPasswordResetEmail'>Forgot Password</NavLink>
          
          {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
      </Box>
    </>
  );
};

export default UserLogin;
