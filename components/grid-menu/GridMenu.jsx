import { Card } from "antd";
import { isEmpty } from "utils/helpers";

export default function GridMenu(props) {
  const { menu, width } = props;
  const onClickHandler = props.handleMenuClick ? props.handleMenuClick : null;
  const gridMenu = { cursor: "pointer", width: width };
  const gridIcon = { marginRight: "1rem" };

  const gridContent = menu.map((data, index) => {
    return (
      <Card.Grid
        onClick={e => onClickHandler(data.key)}
        key={"Card.Grid-" + index}
        style={data.style ? { ...gridMenu, ...data.style } : gridMenu}
      >
        <i style={gridIcon}>{data.icon}</i>
        {data.name}
      </Card.Grid>
    );
  });

  return (
    <Card
      style={{
        width: "100%"
      }}
      bordered={false}
    >
      {gridContent}
    </Card>
  );
}
