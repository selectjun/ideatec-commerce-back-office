import LayerFrame from "../../components/LayerFrame";

export interface ExportProps {
  layoutKey: string;
  title?: string;
}

const Export: React.FC<ExportProps> = ({ layoutKey, title }) => {
  return <LayerFrame layoutKey={layoutKey} title={title}></LayerFrame>;
};

export default Export;
