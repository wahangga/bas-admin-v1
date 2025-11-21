'use client';

import { Card, CardBody, CardHeader, CardTitle, Button, Badge, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import IconifyIcon from '@/components/wrappers/IconifyIcon';

const EventDetails = () => {
  const searchParams = useSearchParams();
  const eventId = searchParams.get('id');

  // TODO: Fetch event data based on eventId
  const event = {
    id: eventId || 1,
    name: 'Annual Conference 2024',
    date: '2024-12-15',
    location: 'Bali Convention Center',
    status: 'active',
    attendees: 150,
    maxAttendees: 200,
    description: 'Annual conference for all members'
  };

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <CardTitle className="mb-0">Event Details</CardTitle>
        <Link href={`/event/event-edit?id=${event.id}`}>
          <Button variant="warning">
            <IconifyIcon icon="solar:pen-bold-duotone" className="me-1" />
            Edit Event
          </Button>
        </Link>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md={6}>
            <div className="mb-3">
              <strong>Event Name:</strong>
              <p>{event.name}</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3">
              <strong>Date:</strong>
              <p>{event.date}</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3">
              <strong>Location:</strong>
              <p>{event.location}</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3">
              <strong>Status:</strong>
              <p>
                <Badge bg={event.status === 'active' ? 'success' : 'warning'}>
                  {event.status}
                </Badge>
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3">
              <strong>Attendees:</strong>
              <p>{event.attendees} / {event.maxAttendees}</p>
            </div>
          </Col>
          <Col md={12}>
            <div className="mb-3">
              <strong>Description:</strong>
              <p>{event.description}</p>
            </div>
          </Col>
        </Row>
        <div className="text-end">
          <Link href="/event/event-list" className="btn btn-secondary">
            Back to List
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default EventDetails;

