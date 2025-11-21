'use client';

import { Card, CardBody, CardHeader, CardTitle, Table, Badge, Button } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';

const MembershipList = () => {
  // Mock data - replace with actual data fetching
  const memberships = [
    {
      id: 1,
      memberName: 'John Doe',
      amount: 500,
      paymentDate: '2024-01-15',
      expiryDate: '2025-01-15',
      status: 'active',
      paymentMethod: 'Credit Card'
    },
    {
      id: 2,
      memberName: 'Jane Smith',
      amount: 500,
      paymentDate: '2024-02-20',
      expiryDate: '2025-02-20',
      status: 'active',
      paymentMethod: 'Bank Transfer'
    }
  ];

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <CardTitle className="mb-0">Yearly Membership Payments</CardTitle>
        <Button variant="primary">
          <IconifyIcon icon="solar:add-circle-bold-duotone" className="me-1" />
          Add Payment
        </Button>
      </CardHeader>
      <CardBody>
        <div className="table-responsive">
          <Table className="table-nowrap align-middle mb-0">
            <thead>
              <tr>
                <th>Member Name</th>
                <th>Amount</th>
                <th>Payment Date</th>
                <th>Expiry Date</th>
                <th>Payment Method</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {memberships.map((membership) => (
                <tr key={membership.id}>
                  <td>{membership.memberName}</td>
                  <td>${membership.amount}</td>
                  <td>{membership.paymentDate}</td>
                  <td>{membership.expiryDate}</td>
                  <td>{membership.paymentMethod}</td>
                  <td>
                    <Badge bg={membership.status === 'active' ? 'success' : 'warning'}>
                      {membership.status}
                    </Badge>
                  </td>
                  <td>
                    <Button variant="info" size="sm" className="me-1">
                      <IconifyIcon icon="solar:eye-bold-duotone" />
                    </Button>
                    <Button variant="success" size="sm">
                      <IconifyIcon icon="solar:printer-bold-duotone" />
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

export default MembershipList;

