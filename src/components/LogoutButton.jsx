import { signOut } from 'next-auth/react';
import { Button } from 'react-bootstrap';

const LogoutButton = () => {
  return (
    <Button variant="outline-danger" onClick={() => signOut({ callbackUrl: '/auth/sign-in' })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
