import { Col, Row } from 'react-bootstrap';
import PageTItle from '@/components/PageTItle';
import EventList from './components/EventList';

export const metadata = {
  title: 'Event List'
};

const EventListPage = () => {
  return (
    <>
      <PageTItle title="EVENT LIST" />
      <Row>
        <Col xl={12}>
          <EventList />
        </Col>
      </Row>
    </>
  );
};

export default EventListPage;

