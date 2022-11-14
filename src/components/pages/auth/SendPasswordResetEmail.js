import { TextField, Button, Box, Alert, Grid } from '@mui/material';
import { useState } from "react";

const SendPasswordResetEmail = () => {
    const [error, setError] = useState({
        status: false,
        msg: '',
        type:'',
    })
 
    const handleSubmit = (e)=> {
        e.preventDefault();
        const date = new FormData(e.currentTarget);
        const actualDate = {
            email : date.get('email'), 
        }
        
        if(actualDate.email ){
            console.log(actualDate)
            document.getElementById('send_reset_emailpass').reset()
            setError({status:true, msg:"Password Reset Email is Send ! Pls Check Your Email ", type:'success'}) 
         
        }
        else{
            setError({status:true, msg:"Pls Provide valid email", type:'error'}) 
        }
    }
  return (
    <>
      <Grid container justifyContent='center'>
      <Grid item sm={6} xs={12}>
      <h1>Reset Password</h1>
      <Box component="form" noValidate sx={{ mt: 2 }} id="send_reset_emailpass" onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
        />
         
          <Box textAlign="center">
            <Button type="submit" variant="contained" sx={{mt:3, mb:2, px:5}}>Send</Button>
          </Box>
         
          
          {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
      </Box>
      </Grid>
      </Grid>
    </>
  );
}

export default SendPasswordResetEmail;