'use client';

import { Card, CardBody, CardHeader, CardTitle, Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const EventForm = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Event data:', data);
    // TODO: Add API call to create event
    router.push('/event/event-list');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Information</CardTitle>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Event Name <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="text"
                  {...register('name', { required: 'Event name is required' })}
                  placeholder="Enter event name"
                />
                {errors.name && <span className="text-danger">{errors.name.message}</span>}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Event Date <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="date"
                  {...register('date', { required: 'Event date is required' })}
                />
                {errors.date && <span className="text-danger">{errors.date.message}</span>}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Location <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="text"
                  {...register('location', { required: 'Location is required' })}
                  placeholder="Enter location"
                />
                {errors.location && <span className="text-danger">{errors.location.message}</span>}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Max Attendees</Form.Label>
                <Form.Control
                  type="number"
                  {...register('maxAttendees')}
                  placeholder="Enter max attendees"
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              {...register('description')}
              placeholder="Enter event description"
            />
          </Form.Group>
          <div className="text-end">
            <Link href="/event/event-list" className="btn btn-danger me-2">
              Cancel
            </Link>
            <Button type="submit" variant="success">
              Create Event
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};

export default EventForm;

