'use client';

import { Card, CardBody, CardHeader, CardTitle, Form, Button, Row, Col, Table } from 'react-bootstrap';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import IconifyIcon from '@/components/wrappers/IconifyIcon';

const QRCodeGenerator = () => {
  const [qrCodes, setQrCodes] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Generate unique QR code data (memberId + eventId + timestamp)
    const qrData = {
      id: Date.now(),
      memberId: data.memberId,
      eventId: data.eventId,
      qrCode: `EVENT:${data.eventId}|MEMBER:${data.memberId}|TIMESTAMP:${Date.now()}`,
      generatedAt: new Date().toLocaleString()
    };
    setQrCodes([...qrCodes, qrData]);
  };

  const downloadQR = (qrData) => {
    // TODO: Implement actual QR code generation and download
    console.log('Download QR:', qrData);
  };

  return (
    <Row>
      <Col md={4}>
        <Card>
          <CardHeader>
            <CardTitle>Generate QR Code</CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label>Select Member <span className="text-danger">*</span></Form.Label>
                <Form.Select {...register('memberId', { required: 'Member is required' })}>
                  <option value="">Select member</option>
                  <option value="1">John Doe</option>
                  <option value="2">Jane Smith</option>
                </Form.Select>
                {errors.memberId && <span className="text-danger">{errors.memberId.message}</span>}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Select Event <span className="text-danger">*</span></Form.Label>
                <Form.Select {...register('eventId', { required: 'Event is required' })}>
                  <option value="">Select event</option>
                  <option value="1">Annual Conference 2024</option>
                  <option value="2">Workshop Series</option>
                </Form.Select>
                {errors.eventId && <span className="text-danger">{errors.eventId.message}</span>}
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100">
                <IconifyIcon icon="solar:qr-code-bold-duotone" className="me-1" />
                Generate QR Code
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
      <Col md={8}>
        <Card>
          <CardHeader>
            <CardTitle>Generated QR Codes</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="table-responsive">
              <Table className="table-nowrap align-middle mb-0">
                <thead>
                  <tr>
                    <th>Member ID</th>
                    <th>Event ID</th>
                    <th>QR Code</th>
                    <th>Generated At</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {qrCodes.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center text-muted">
                        No QR codes generated yet
                      </td>
                    </tr>
                  ) : (
                    qrCodes.map((qr) => (
                      <tr key={qr.id}>
                        <td>{qr.memberId}</td>
                        <td>{qr.eventId}</td>
                        <td>
                          <code className="text-primary">{qr.qrCode.substring(0, 30)}...</code>
                        </td>
                        <td>{qr.generatedAt}</td>
                        <td>
                          <Button variant="info" size="sm" onClick={() => downloadQR(qr)}>
                            <IconifyIcon icon="solar:download-bold-duotone" />
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default QRCodeGenerator;

