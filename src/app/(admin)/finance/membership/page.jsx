import { Row, Col } from 'react-bootstrap';
import PageTItle from '@/components/PageTItle';
import MembershipList from './components/MembershipList';

export const metadata = {
  title: 'Membership'
};

const MembershipPage = () => {
  return (
    <>
      <PageTItle title="MEMBERSHIP PAYMENTS" />
      <Row>
        <Col xl={12}>
          <MembershipList />
        </Col>
      </Row>
    </>
  );
};

export default MembershipPage;

