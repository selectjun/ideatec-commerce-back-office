import LayerFrame from "../../components/LayerFrame";

export interface AnotherNavItemProps {
  layoutKey: string;
  title?: string;
}

const AnotherNavItem: React.FC<AnotherNavItemProps> = ({
  layoutKey,
  title,
}) => {
  console.log(title);
  return <LayerFrame layoutKey={layoutKey} title={title}></LayerFrame>;
};

export default AnotherNavItem;
