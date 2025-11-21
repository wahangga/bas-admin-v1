import { Row, Col } from 'react-bootstrap';
import PageTItle from '@/components/PageTItle';
import Stats from './components/Stats';
import RecentMembers from './components/RecentMembers';
import UpcomingEvents from './components/UpcomingEvents';
import QuickActions from './components/QuickActions';

export const metadata = {
  title: 'Dashboard'
};

const DashboardPage = () => {
  return (
    <>
      <PageTItle title="DASHBOARD" />
      <Row className="mb-4">
        <Stats />
      </Row>
      <Row>
        <Col xl={8}>
          <Row>
            <Col xs={12} className="mb-4">
              <RecentMembers />
            </Col>
            <Col xs={12}>
              <UpcomingEvents />
            </Col>
          </Row>
        </Col>
        <Col xl={4}>
          <QuickActions />
        </Col>
      </Row>
    </>
  );
};

export default DashboardPage;
