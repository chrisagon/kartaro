import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { TextField, Button, Container, Typography, Box, Link, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect will be handled by the router based on auth state
    } catch (err) {
      setError('Failed to log in. Please check your credentials.');
      console.error(err);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setMessage('');
    setResetEmail('');
  };

  const handlePasswordReset = async () => {
    const auth = getAuth();
    if (!resetEmail) {
      setMessage('Please enter your email address.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setMessage('Password reset email sent! Check your inbox.');
    } catch (err) {
      setMessage('Failed to send password reset email. Please check the email address.');
      console.error(err);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Link component="button" type="button" onClick={handleClickOpen} variant="body2">
                Forgot password?
            </Link>
            <Link component={RouterLink} to="/register" variant="body2">
                Don't have an account? Sign Up
            </Link>
          </Box>
        </Box>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To reset your password, please enter your email address here. We will send you a link to reset your password.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="reset-email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
          />
          {message && (
            <Typography color={message.startsWith('Failed') ? 'error' : 'primary'} variant="body2" sx={{ mt: 2 }}>
              {message}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handlePasswordReset}>Send Reset Email</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default LoginPage;
