import { Input, Button } from 'antd';
import { Form, Row, Col } from 'antd';
import { formItemLayout } from 'components';
import formPendaftaran from './form';

export default function FormPendaftaran(props) {
  const { getFieldDecorator, handleSubmit } = props;

  return (
    <Row type='flex' justify='center'>
      <Col span={24}>
        <div style={{ textAlign: 'left' }}>
          <h1 style={{ marginBottom: 15 }}>PENDAFTARAN</h1>
        </div>

        <Form
          className='register-form'
          {...formItemLayout}
          onSubmit={handleSubmit}>
          {formPendaftaran.map(item => {
            return (
              <Form.Item
                label={item.label}
                key={item.field}
                hasFeedback={item.hasFeedback}>
                {getFieldDecorator(item.field, {
                  initialValue: item.initialValue,
                  rules: item.rules,
                })(
                  <Input
                    key={item.label}
                    placeholder={item.placeholder}
                    onBlur={item.handleConfirmBlur}
                    addonBefore={item.addonBefore}
                    style={item.style}
                  />,
                )}
              </Form.Item>
            );
          })}

          <div style={{ textAlign: 'right', marginTop: 30, width: '100%' }}>
            <Button type='primary' htmlType='submit'>
              Daftarkan
            </Button>
            {/* </Form.Item> */}
          </div>
        </Form>
      </Col>
    </Row>
  );
}
