import LayerFrame from "../../components/LayerFrame";

export interface AnalyticsProps {
  layoutKey: string;
  title?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ layoutKey, title }) => {
  console.log(title);
  return <LayerFrame layoutKey={layoutKey} title={title}></LayerFrame>;
};

export default Analytics;
