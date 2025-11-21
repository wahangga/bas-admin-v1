import { Row } from 'react-bootstrap';
import PageTItle from '@/components/PageTItle';
import MemberForm from './components/MemberForm';

export const metadata = {
  title: 'Create Member'
};

const MemberAddPage = () => {
  return (
    <>
      <PageTItle title="CREATE MEMBER" />
      <Row>
        <MemberForm />
      </Row>
    </>
  );
};

export default MemberAddPage;

