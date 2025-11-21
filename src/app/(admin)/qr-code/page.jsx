import { Row, Col } from 'react-bootstrap';
import PageTItle from '@/components/PageTItle';
import QRCodeGenerator from './components/QRCodeGenerator';

export const metadata = {
  title: 'QR Code'
};

const QRCodePage = () => {
  return (
    <>
      <PageTItle title="QR CODE GENERATOR" />
      <Row>
        <Col xl={12}>
          <QRCodeGenerator />
        </Col>
      </Row>
    </>
  );
};

export default QRCodePage;

