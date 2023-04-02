import LayerFrame from "../../components/LayerFrame";

export interface LinuxProps {
  layoutKey: string;
  title?: string;
}

const Linux: React.FC<LinuxProps> = ({ layoutKey, title }) => {
  return <LayerFrame layoutKey={layoutKey} title={title}></LayerFrame>;
};

export default Linux;
