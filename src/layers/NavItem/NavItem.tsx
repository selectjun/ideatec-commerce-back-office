import LayerFrame from "../../components/LayerFrame";

export interface NavItemProps {
  layoutKey: string;
  title?: string;
}

const NavItem: React.FC<NavItemProps> = ({ layoutKey, title }) => {
  return <LayerFrame layoutKey={layoutKey} title={title}></LayerFrame>;
};

export default NavItem;
