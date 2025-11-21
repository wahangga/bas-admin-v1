'use client';

import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Link from 'next/link';
import { Card, CardBody, CardFooter, CardTitle, Col, Row } from 'react-bootstrap';

const StatsCard = ({
  amount,
  change,
  icon,
  name,
  variant,
  link
}) => {
  return (
    <Col md={6} lg={3} className="mb-3">
      <Card className="overflow-hidden">
        <CardBody>
          <Row>
            <Col xs={6}>
              <div className={`avatar-md bg-soft-${variant} rounded flex-centered`}>
                <IconifyIcon icon={icon} className={`fs-24 text-${variant}`} />
              </div>
            </Col>
            <Col xs={6} className="text-end">
              <p className="text-muted mb-0 text-truncate">{name}</p>
              <h3 className="text-dark mt-1 mb-0">{amount}</h3>
            </Col>
          </Row>
        </CardBody>
        {link && (
          <CardFooter className="py-2 bg-light bg-opacity-50">
            <Link href={link} className="text-reset fw-semibold fs-12 d-block text-center">
              View Details <IconifyIcon icon="solar:arrow-right-bold-duotone" className="fs-12" />
            </Link>
          </CardFooter>
        )}
      </Card>
    </Col>
  );
};

const Stats = () => {
  // Mock data - replace with actual API calls
  const statsData = [
    {
      name: 'Total Members',
      amount: '1,234',
      icon: 'solar:users-group-two-rounded-bold-duotone',
      variant: 'primary',
      link: '/member/member-list'
    },
    {
      name: 'Active Members',
      amount: '1,089',
      icon: 'solar:user-check-rounded-bold-duotone',
      variant: 'success',
      link: '/member/member-list'
    },
    {
      name: 'Total Events',
      amount: '45',
      icon: 'solar:calendar-bold-duotone',
      variant: 'info',
      link: '/event/event-list'
    },
    {
      name: 'Upcoming Events',
      amount: '8',
      icon: 'solar:calendar-mark-bold-duotone',
      variant: 'warning',
      link: '/event/event-list'
    }
  ];

  return (
    <Row>
      {statsData.map((item, idx) => (
        <StatsCard key={idx} {...item} />
      ))}
    </Row>
  );
};

export default Stats;
