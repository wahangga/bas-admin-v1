'use client';

import { Card, CardBody, CardHeader, CardTitle, Table, Button, Badge } from 'react-bootstrap';
import Link from 'next/link';
import IconifyIcon from '@/components/wrappers/IconifyIcon';

const MemberList = () => {
  // Mock data - replace with actual data fetching
  const members = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      membershipType: 'Yearly',
      status: 'active',
      joinDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1234567891',
      membershipType: 'Yearly',
      status: 'active',
      joinDate: '2024-02-20'
    }
  ];

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <CardTitle className="mb-0">Members</CardTitle>
        <Link href="/member/member-add">
          <Button variant="primary">
            <IconifyIcon icon="solar:add-circle-bold-duotone" className="me-1" />
            Create Member
          </Button>
        </Link>
      </CardHeader>
      <CardBody>
        <div className="table-responsive">
          <Table className="table-nowrap align-middle mb-0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Membership Type</th>
                <th>Status</th>
                <th>Join Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.phone}</td>
                  <td>{member.membershipType}</td>
                  <td>
                    <Badge bg={member.status === 'active' ? 'success' : 'secondary'}>
                      {member.status}
                    </Badge>
                  </td>
                  <td>{member.joinDate}</td>
                  <td>
                    <Link href={`/member/member-details?id=${member.id}`} className="btn btn-sm btn-info me-1">
                      <IconifyIcon icon="solar:eye-bold-duotone" />
                    </Link>
                    <Link href={`/member/member-edit?id=${member.id}`} className="btn btn-sm btn-warning me-1">
                      <IconifyIcon icon="solar:pen-bold-duotone" />
                    </Link>
                    <Button variant="danger" size="sm">
                      <IconifyIcon icon="solar:trash-bin-trash-bold-duotone" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default MemberList;

