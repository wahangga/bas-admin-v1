import { Row } from 'react-bootstrap';
import PageTItle from '@/components/PageTItle';
import EventForm from './components/EventForm';

export const metadata = {
  title: 'Create Event'
};

const EventAddPage = () => {
  return (
    <>
      <PageTItle title="CREATE EVENT" />
      <Row>
        <EventForm />
      </Row>
    </>
  );
};

export default EventAddPage;

