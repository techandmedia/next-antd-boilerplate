import { Menu, Icon, Dropdown } from "antd";

export default function columns() {
  let cssRow = "no-wrap text-capitalize";

  function menu(record) {
    return (
      <Menu>
        <Menu.Item key="1">
          <span>
            <Icon type="user" /> View Record
          </span>
        </Menu.Item>
      </Menu>
    );
  }

  let dataColumns = [
    {
      title: "name",
      dataIndex: "name"
    },
    {
      title: "age",
      dataIndex: "age"
    },
    {
      title: "address",
      dataIndex: "address"
    },
    {
      title: "",
      dataIndex: "operation",
      key: "operation",
      width: 60,
      render: (text, record) => {
        return (
          <React.Fragment>
            <Dropdown overlay={menu(record)}>
              <span className="ant-dropdown-link">
                <Icon type="more" size="small" />
              </span>
            </Dropdown>
          </React.Fragment>
        );
      }
    }
  ];

  return dataColumns;
}
