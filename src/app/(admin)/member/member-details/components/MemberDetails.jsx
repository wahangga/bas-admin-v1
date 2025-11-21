'use client';

import { Card, CardBody, CardHeader, CardTitle, Button, Badge, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import IconifyIcon from '@/components/wrappers/IconifyIcon';

const MemberDetails = () => {
  const searchParams = useSearchParams();
  const memberId = searchParams.get('id');

  // TODO: Fetch member data based on memberId
  const member = {
    id: memberId || 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    membershipType: 'Yearly',
    status: 'active',
    joinDate: '2024-01-15',
    address: '123 Main Street, City, Country'
  };

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <CardTitle className="mb-0">Member Details</CardTitle>
        <Link href={`/member/member-edit?id=${member.id}`}>
          <Button variant="warning">
            <IconifyIcon icon="solar:pen-bold-duotone" className="me-1" />
            Edit Member
          </Button>
        </Link>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md={6}>
            <div className="mb-3">
              <strong>Name:</strong>
              <p>{member.name}</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3">
              <strong>Email:</strong>
              <p>{member.email}</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3">
              <strong>Phone:</strong>
              <p>{member.phone}</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3">
              <strong>Membership Type:</strong>
              <p>{member.membershipType}</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3">
              <strong>Status:</strong>
              <p>
                <Badge bg={member.status === 'active' ? 'success' : 'secondary'}>
                  {member.status}
                </Badge>
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3">
              <strong>Join Date:</strong>
              <p>{member.joinDate}</p>
            </div>
          </Col>
          <Col md={12}>
            <div className="mb-3">
              <strong>Address:</strong>
              <p>{member.address}</p>
            </div>
          </Col>
        </Row>
        <div className="text-end">
          <Link href="/member/member-list" className="btn btn-secondary">
            Back to List
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default MemberDetails;

