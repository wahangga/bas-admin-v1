'use client';

import { Card, CardBody, CardHeader, CardTitle, Table, Badge, Button } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';

const DonationList = () => {
  // Mock data - replace with actual data fetching
  const donations = [
    {
      id: 1,
      donorName: 'Anonymous',
      amount: 100,
      donationDate: '2024-11-15',
      paymentMethod: 'Credit Card',
      status: 'completed',
      note: 'Thank you for your support'
    },
    {
      id: 2,
      donorName: 'Robert Johnson',
      amount: 250,
      donationDate: '2024-11-20',
      paymentMethod: 'Bank Transfer',
      status: 'completed',
      note: 'Supporting the cause'
    }
  ];

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <CardTitle className="mb-0">Donations</CardTitle>
        <Button variant="primary">
          <IconifyIcon icon="solar:add-circle-bold-duotone" className="me-1" />
          Add Donation
        </Button>
      </CardHeader>
      <CardBody>
        <div className="table-responsive">
          <Table className="table-nowrap align-middle mb-0">
            <thead>
              <tr>
                <th>Donor Name</th>
                <th>Amount</th>
                <th>Donation Date</th>
                <th>Payment Method</th>
                <th>Status</th>
                <th>Note</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation) => (
                <tr key={donation.id}>
                  <td>{donation.donorName}</td>
                  <td>${donation.amount}</td>
                  <td>{donation.donationDate}</td>
                  <td>{donation.paymentMethod}</td>
                  <td>
                    <Badge bg={donation.status === 'completed' ? 'success' : 'warning'}>
                      {donation.status}
                    </Badge>
                  </td>
                  <td>{donation.note}</td>
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

export default DonationList;

