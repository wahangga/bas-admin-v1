'use client';

import { Card, CardBody, CardHeader, CardTitle, Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';

const MemberForm = ({ isEdit = false }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const memberId = searchParams.get('id');
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  useEffect(() => {
    if (isEdit && memberId) {
      // TODO: Fetch member data and populate form
      setValue('name', 'John Doe');
      setValue('email', 'john@example.com');
      setValue('phone', '+1234567890');
      setValue('membershipType', 'Yearly');
    }
  }, [isEdit, memberId, setValue]);

  const onSubmit = (data) => {
    console.log('Member data:', data);
    // TODO: Add API call to update member
    router.push('/member/member-list');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEdit ? 'Edit Member' : 'Member Information'}</CardTitle>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Enter full name"
                />
                {errors.name && <span className="text-danger">{errors.name.message}</span>}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  placeholder="Enter email"
                />
                {errors.email && <span className="text-danger">{errors.email.message}</span>}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="tel"
                  {...register('phone', { required: 'Phone is required' })}
                  placeholder="Enter phone number"
                />
                {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Membership Type <span className="text-danger">*</span></Form.Label>
                <Form.Select {...register('membershipType', { required: 'Membership type is required' })}>
                  <option value="">Select membership type</option>
                  <option value="Yearly">Yearly</option>
                  <option value="Monthly">Monthly</option>
                </Form.Select>
                {errors.membershipType && <span className="text-danger">{errors.membershipType.message}</span>}
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register('address')}
              placeholder="Enter address"
            />
          </Form.Group>
          <div className="text-end">
            <Link href="/member/member-list" className="btn btn-danger me-2">
              Cancel
            </Link>
            <Button type="submit" variant="success">
              {isEdit ? 'Update Member' : 'Create Member'}
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};

export default MemberForm;

