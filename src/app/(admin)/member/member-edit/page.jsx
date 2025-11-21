import { Row } from 'react-bootstrap';
import { Suspense } from 'react';
import PageTItle from '@/components/PageTItle';
import MemberForm from './components/MemberForm';
import FallbackLoading from '@/components/FallbackLoading';

export const metadata = {
  title: 'Edit Member'
};

const MemberEditPage = () => {
  return (
    <>
      <PageTItle title="EDIT MEMBER" />
      <Row>
        <Suspense fallback={<FallbackLoading />}>
          <MemberForm isEdit={true} />
        </Suspense>
      </Row>
    </>
  );
};

export default MemberEditPage;

