'use client';

import { Card, CardBody, CardHeader, CardTitle, Table, Button, Badge } from 'react-bootstrap';
import Link from 'next/link';
import IconifyIcon from '@/components/wrappers/IconifyIcon';

const EventList = () => {
  // Mock data - replace with actual data fetching
  const events = [
    {
      id: 1,
      name: 'Annual Conference 2024',
      date: '2024-12-15',
      location: 'Bali Convention Center',
      status: 'active',
      attendees: 150
    },
    {
      id: 2,
      name: 'Workshop Series',
      date: '2024-12-20',
      location: 'Online',
      status: 'upcoming',
      attendees: 75
    }
  ];

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <CardTitle className="mb-0">Events</CardTitle>
        <Link href="/event/event-add">
          <Button variant="primary">
            <IconifyIcon icon="solar:add-circle-bold-duotone" className="me-1" />
            Create Event
          </Button>
        </Link>
      </CardHeader>
      <CardBody>
        <div className="table-responsive">
          <Table className="table-nowrap align-middle mb-0">
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Location</th>
                <th>Attendees</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td>{event.location}</td>
                  <td>{event.attendees}</td>
                  <td>
                    <Badge bg={event.status === 'active' ? 'success' : 'warning'}>
                      {event.status}
                    </Badge>
                  </td>
                  <td>
                    <Link href={`/event/event-details?id=${event.id}`} className="btn btn-sm btn-info me-1">
                      <IconifyIcon icon="solar:eye-bold-duotone" />
                    </Link>
                    <Link href={`/event/event-edit?id=${event.id}`} className="btn btn-sm btn-warning me-1">
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

export default EventList;

