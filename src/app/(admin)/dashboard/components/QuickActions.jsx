'use client';

import { Card, CardBody, CardTitle, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import IconifyIcon from '@/components/wrappers/IconifyIcon';

const QuickActions = () => {
  const actions = [
    {
      title: 'Create Event',
      icon: 'solar:calendar-add-bold-duotone',
      link: '/event/event-add',
      variant: 'primary'
    },
    {
      title: 'Add Member',
      icon: 'solar:user-plus-rounded-bold-duotone',
      link: '/member/member-add',
      variant: 'success'
    },
    {
      title: 'Generate QR Code',
      icon: 'solar:qr-code-bold-duotone',
      link: '/qr-code',
      variant: 'info'
    },
    {
      title: 'View Finance',
      icon: 'solar:wallet-money-bold-duotone',
      link: '/finance/membership',
      variant: 'warning'
    }
  ];

  return (
    <Card>
      <CardBody>
        <CardTitle className="mb-3">Quick Actions</CardTitle>
        <Row>
          {actions.map((action, idx) => (
            <Col md={6} key={idx} className="mb-3">
              <Link href={action.link} className="text-decoration-none">
                <Button variant={action.variant} className="w-100" size="lg">
                  <IconifyIcon icon={action.icon} className="me-2 fs-18" />
                  {action.title}
                </Button>
              </Link>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
};

export default QuickActions;

