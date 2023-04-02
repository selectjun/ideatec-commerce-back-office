import LayerFrame from "../../components/LayerFrame";

export interface MacintochProps {
  layoutKey: string;
  title?: string;
}

const Macintoch: React.FC<MacintochProps> = ({ layoutKey, title }) => {
  return <LayerFrame layoutKey={layoutKey} title={title}></LayerFrame>;
};

export default Macintoch;
