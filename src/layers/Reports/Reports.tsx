import LayerFrame from "../../components/LayerFrame";

export interface ReportsProps {
  layoutKey: string;
  title?: string;
}

const Reports: React.FC<ReportsProps> = ({ layoutKey, title }) => {
  return <LayerFrame layoutKey={layoutKey} title={title}></LayerFrame>;
};

export default Reports;
