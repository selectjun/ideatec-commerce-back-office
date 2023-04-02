import LayerFrame from "../../components/LayerFrame";

export interface MoreNavigationProps {
  layoutKey: string;
  title?: string;
}

const MoreNavigation: React.FC<MoreNavigationProps> = ({
  layoutKey,
  title,
}) => {
  return <LayerFrame layoutKey={layoutKey} title={title}></LayerFrame>;
};

export default MoreNavigation;
