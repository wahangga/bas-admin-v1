import { Row, Col } from 'react-bootstrap';
import PageTItle from '@/components/PageTItle';
import DonationList from './components/DonationList';

export const metadata = {
  title: 'Donation'
};

const DonationPage = () => {
  return (
    <>
      <PageTItle title="DONATIONS" />
      <Row>
        <Col xl={12}>
          <DonationList />
        </Col>
      </Row>
    </>
  );
};

export default DonationPage;

