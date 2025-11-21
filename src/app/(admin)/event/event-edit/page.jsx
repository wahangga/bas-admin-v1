import { Row } from 'react-bootstrap';
import { Suspense } from 'react';
import PageTItle from '@/components/PageTItle';
import EventForm from './components/EventForm';
import FallbackLoading from '@/components/FallbackLoading';

export const metadata = {
  title: 'Edit Event'
};

const EventEditPage = () => {
  return (
    <>
      <PageTItle title="EDIT EVENT" />
      <Row>
        <Suspense fallback={<FallbackLoading />}>
          <EventForm isEdit={true} />
        </Suspense>
      </Row>
    </>
  );
};

export default EventEditPage;

