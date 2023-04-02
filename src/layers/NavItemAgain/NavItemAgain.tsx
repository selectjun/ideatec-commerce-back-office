import LayerFrame from "../../components/LayerFrame";

export interface NavItemAgainProps {
  layoutKey: string;
  title?: string;
}

const NavItemAgain: React.FC<NavItemAgainProps> = ({ layoutKey, title }) => {
  return <LayerFrame layoutKey={layoutKey} title={title}></LayerFrame>;
};

export default NavItemAgain;
