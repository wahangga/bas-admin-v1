import { Row, Col } from 'react-bootstrap';
import { Suspense } from 'react';
import PageTItle from '@/components/PageTItle';
import MemberDetails from './components/MemberDetails';
import FallbackLoading from '@/components/FallbackLoading';

export const metadata = {
  title: 'Member Details'
};

const MemberDetailsPage = () => {
  return (
    <>
      <PageTItle title="MEMBER DETAILS" />
      <Row>
        <Col xl={12}>
          <Suspense fallback={<FallbackLoading />}>
            <MemberDetails />
          </Suspense>
        </Col>
      </Row>
    </>
  );
};

export default MemberDetailsPage;

