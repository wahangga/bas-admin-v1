'use client';

import { Card, CardBody, CardHeader, CardTitle, ListGroup, Badge, Button } from 'react-bootstrap';
import Link from 'next/link';
import IconifyIcon from '@/components/wrappers/IconifyIcon';

const UpcomingEvents = () => {
  // Mock data - replace with actual API calls
  const upcomingEvents = [
    {
      id: 1,
      name: 'Annual Conference 2024',
      date: '2024-12-15',
      location: 'Bali Convention Center',
      attendees: 150,
      maxAttendees: 200,
      status: 'upcoming'
    },
    {
      id: 2,
      name: 'Workshop Series',
      date: '2024-12-20',
      location: 'Online',
      attendees: 75,
      maxAttendees: 100,
      status: 'upcoming'
    },
    {
      id: 3,
      name: 'Community Gathering',
      date: '2024-12-25',
      location: 'Community Hall',
      attendees: 45,
      maxAttendees: 80,
      status: 'upcoming'
    },
    {
      id: 4,
      name: 'New Year Celebration',
      date: '2025-01-01',
      location: 'Main Hall',
      attendees: 120,
      maxAttendees: 150,
      status: 'upcoming'
    }
  ];

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <CardTitle className="mb-0">Upcoming Events</CardTitle>
        <Link href="/event/event-list">
          <Button variant="link" size="sm">
            View All <IconifyIcon icon="solar:arrow-right-bold-duotone" />
          </Button>
        </Link>
      </CardHeader>
      <CardBody>
        <ListGroup variant="flush">
          {upcomingEvents.map((event) => (
            <ListGroup.Item key={event.id} className="px-0">
              <div className="d-flex justify-content-between align-items-start">
                <div className="flex-grow-1">
                  <h6 className="mb-1">{event.name}</h6>
                  <p className="text-muted mb-1 small">
                    <IconifyIcon icon="solar:calendar-bold-duotone" className="me-1" />
                    {event.date}
                  </p>
                  <p className="text-muted mb-1 small">
                    <IconifyIcon icon="solar:map-point-bold-duotone" className="me-1" />
                    {event.location}
                  </p>
                  <p className="text-muted mb-0 small">
                    <IconifyIcon icon="solar:users-group-two-rounded-bold-duotone" className="me-1" />
                    {event.attendees} / {event.maxAttendees} attendees
                  </p>
                </div>
                <div className="text-end">
                  <Badge bg="warning" className="mb-2">
                    {event.status}
                  </Badge>
                  <br />
                  <Link href={`/event/event-details?id=${event.id}`}>
                    <Button variant="info" size="sm">
                      <IconifyIcon icon="solar:eye-bold-duotone" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default UpcomingEvents;

