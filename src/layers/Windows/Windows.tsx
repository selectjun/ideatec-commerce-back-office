import LayerFrame from "../../components/LayerFrame";

export interface WindowsProps {
  layoutKey: string;
  title?: string;
}

const Windows: React.FC<WindowsProps> = ({ layoutKey, title }) => {
  return <LayerFrame layoutKey={layoutKey} title={title}></LayerFrame>;
};

export default Windows;
