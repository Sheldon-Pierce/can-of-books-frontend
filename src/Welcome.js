import React from 'react';
import LoginButton from './LogInButton';
import LogoutButton from './Logout';
import Container from 'react-bootstrap/Container';
import { withAuth0 } from '@auth0/auth0-react';

const Welcome = () => {
  return (
    <Container
      style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '3px' }} 
    >
      <LoginButton />
      <LogoutButton />
    </Container>
  );
};

export default withAuth0(Welcome);
