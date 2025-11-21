import { Col, Row } from 'react-bootstrap';
import PageTItle from '@/components/PageTItle';
import MemberList from './components/MemberList';

export const metadata = {
  title: 'Member List'
};

const MemberListPage = () => {
  return (
    <>
      <PageTItle title="MEMBER LIST" />
      <Row>
        <Col xl={12}>
          <MemberList />
        </Col>
      </Row>
    </>
  );
};

export default MemberListPage;

