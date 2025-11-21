'use client';

import { Card, CardBody, CardHeader, CardTitle, Table, Badge, Button } from 'react-bootstrap';
import Link from 'next/link';
import IconifyIcon from '@/components/wrappers/IconifyIcon';

const RecentMembers = () => {
  // Mock data - replace with actual API calls
  const recentMembers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      joinDate: '2024-11-15',
      status: 'active',
      membershipType: 'Yearly'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      joinDate: '2024-11-14',
      status: 'active',
      membershipType: 'Yearly'
    },
    {
      id: 3,
      name: 'Robert Johnson',
      email: 'robert@example.com',
      joinDate: '2024-11-13',
      status: 'active',
      membershipType: 'Yearly'
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily@example.com',
      joinDate: '2024-11-12',
      status: 'active',
      membershipType: 'Yearly'
    },
    {
      id: 5,
      name: 'Michael Brown',
      email: 'michael@example.com',
      joinDate: '2024-11-11',
      status: 'active',
      membershipType: 'Yearly'
    }
  ];

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <CardTitle className="mb-0">Recent Members</CardTitle>
        <Link href="/member/member-list">
          <Button variant="link" size="sm">
            View All <IconifyIcon icon="solar:arrow-right-bold-duotone" />
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
                <th>Join Date</th>
                <th>Membership</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentMembers.map((member) => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.joinDate}</td>
                  <td>{member.membershipType}</td>
                  <td>
                    <Badge bg={member.status === 'active' ? 'success' : 'secondary'}>
                      {member.status}
                    </Badge>
                  </td>
                  <td>
                    <Link href={`/member/member-details?id=${member.id}`}>
                      <Button variant="info" size="sm">
                        <IconifyIcon icon="solar:eye-bold-duotone" />
                      </Button>
                    </Link>
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

export default RecentMembers;

