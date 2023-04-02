import LayerFrame from "../../components/LayerFrame";

export interface OverviewProps {
  layoutKey: string;
  title?: string;
}

const Overview: React.FC<OverviewProps> = ({ layoutKey, title }) => {
  return <LayerFrame layoutKey={layoutKey} title={title}></LayerFrame>;
};

export default Overview;
