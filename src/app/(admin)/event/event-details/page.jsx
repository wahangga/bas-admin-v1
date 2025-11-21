import { Row, Col } from 'react-bootstrap';
import { Suspense } from 'react';
import PageTItle from '@/components/PageTItle';
import EventDetails from './components/EventDetails';
import FallbackLoading from '@/components/FallbackLoading';

export const metadata = {
  title: 'Event Details'
};

const EventDetailsPage = () => {
  return (
    <>
      <PageTItle title="EVENT DETAILS" />
      <Row>
        <Col xl={12}>
          <Suspense fallback={<FallbackLoading />}>
            <EventDetails />
          </Suspense>
        </Col>
      </Row>
    </>
  );
};

export default EventDetailsPage;

