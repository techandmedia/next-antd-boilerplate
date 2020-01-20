import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

function LegalForm(props) {
  const { getFieldDecorator } = props.form;
  return (
    <Form.Item
      label={
        <span>
          Nickname&nbsp;
          <Tooltip title="What do you want others to call you?">
            <Icon type="question-circle-o" />
          </Tooltip>
        </span>
      }
    >
      {getFieldDecorator('nickname', {
        rules: [
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ],
      })(<Input />)}
    </Form.Item>
  );
}

const WrappedLegalForm = Form.create({ name: 'badan-hukum' })(LegalForm);

export default WrappedLegalForm;
