import { Menu, Icon, Dropdown } from "antd";

export default function columns(showModal) {
  let cssRow = "no-wrap text-capitalize";

  function menu(record) {
    return (
      <Menu onClick={e => showModal(e, record)}>
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
      title: "bill_name",
      dataIndex: "bill_name",
      width: 250,
      fixed: "left"
    },
    {
      title: "room_number",
      dataIndex: "room_number",
      width: 100,
      fixed: "left"
    },
    {
      title: <div style={{ textAlign: "left" }}>{"bill_number"}</div>,
      dataIndex: "bill_number",
      align: "right",
      width: 100
    },
    {
      title: "bill_date",
      dataIndex: "bill_date",
      width: 100
    },
    {
      title: "debt_amount",
      dataIndex: "debt_amount",
      align: "right",
      width: 120
    },
    {
      title: "pay_amount",
      dataIndex: "pay_amount",
      align: "right",
      width: 120
    },
    {
      title: "balance",
      dataIndex: "balance",
      align: "right",
      width: 100
    },
    {
      title: "ref_number",
      dataIndex: "ref_no",
      width: 120
    },
    {
      title: "counter_number",
      dataIndex: "counter_no",
      width: 140
    },
    {
      title: "pay_date",
      dataIndex: "pay_date",
      width: 100
    },
    {
      title: "payment",
      dataIndex: "payment",
      width: 200
    },
    {
      title: "id",
      dataIndex: "ID",
      width: 60
    },
    {
      title: "currency",
      dataIndex: "currency",
      width: 100
    },
    {
      title: "guest_name",
      dataIndex: "guest_name",
      width: 250
    },
    {
      title: "voucher_number",
      dataIndex: "voucher_number",
      width: 150
    },
    {
      title: "arrival",
      dataIndex: "arrival",
      width: 100
    },
    {
      title: "departure",
      dataIndex: "departure",
      width: 100
    },
    {
      title: "stay",
      dataIndex: "stay",
      width: 100
    },
    {
      title: "foreign_amount",
      dataIndex: "foreign_amount",
      width: 140
    },
    {
      title: "remark",
      dataIndex: "remark",
      width: 250
    },
    {
      title: "",
      dataIndex: "operation",
      key: "operation",
      width: 60,
      render: (text, record) => {
        return (
          <React.Fragment>
            {/* {(ar_number !== "" || ar_number.charAt(0) === "-") && ( */}
            <Dropdown overlay={menu(record)}>
              <span className="ant-dropdown-link">
                <Icon type="more" size="small" />
              </span>
            </Dropdown>
            {/* )} */}
          </React.Fragment>
        );
      },
      fixed: "right"
    }
  ];

  const columns = dataColumns.map(item => {
    return {
      title: item.title,
      dataIndex: item.dataIndex,
      key: item.dataIndex,
      className: cssRow,
      width: item.width,
      fixed: item.fixed,
      align: item.align,
      render: item.render
    };
  });

  return columns;
}
