import LayerFrame from "../../components/LayerFrame";

export interface OneMoreNavProps {
  layoutKey: string;
  title?: string;
}

const OneMoreNav: React.FC<OneMoreNavProps> = ({ layoutKey, title }) => {
  return <LayerFrame layoutKey={layoutKey} title={title}></LayerFrame>;
};

export default OneMoreNav;
