'use client';

import avatar1 from '@/assets/images/users/avatar-1.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Dropdown, DropdownHeader, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';

const ProfileDropdown = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ 
      redirect: false,
      callbackUrl: '/auth/sign-in' 
    });
    router.push('/auth/sign-in');
  };

  return (
    <Dropdown className="topbar-item">
      <DropdownToggle as={'a'} type="button" className="topbar-button content-none" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="d-flex align-items-center">
          <Image className="rounded-circle" width={32} src={avatar1} alt="avatar" />
        </span>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-end">
        <DropdownHeader as={'h6'} className="dropdown-header">
          Welcome {session?.user?.name || 'User'}!
        </DropdownHeader>
        <DropdownItem as={Link} href="/profile">
          <IconifyIcon icon="bx:user-circle" className="text-muted fs-18 align-middle me-1" />
          <span className="align-middle">Profile</span>
        </DropdownItem>
        <DropdownItem as={Link} href="/settings">
          <IconifyIcon icon="solar:settings-bold-duotone" className="text-muted fs-18 align-middle me-1" />
          <span className="align-middle">Settings</span>
        </DropdownItem>
        <div className="dropdown-divider my-1" />
        <DropdownItem className="text-danger" onClick={handleLogout} style={{ cursor: 'pointer' }}>
          <IconifyIcon icon="bx:log-out" className="fs-18 align-middle me-1" />
          <span className="align-middle">Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileDropdown;