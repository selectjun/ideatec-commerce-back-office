import { useMemo } from "react";
import { Divider, Grid, Menu } from "semantic-ui-react";
import { useLayerActions, useLayerValue } from "../../atoms/layerState";

export interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const { layers } = useLayerValue();
  const { addLayer } = useLayerActions();

  const count = useMemo(
    () => ({
      analytics: layers.filter((layer) => layer.type === "analytics").length,
      anotherNavItem: layers.filter(
        (layer) => layer.type === "another_nav_item"
      ).length,
      export: layers.filter((layer) => layer.type === "export").length,
      linux: layers.filter((layer) => layer.type === "linux").length,
      macintoch: layers.filter((layer) => layer.type === "macintoch").length,
      moreNavigation: layers.filter((layer) => layer.type === "more_navigation")
        .length,
      navItem: layers.filter((layer) => layer.type === "nav_item").length,
      navItemAgain: layers.filter((layer) => layer.type === "nav_item_again")
        .length,
      oneMoreNav: layers.filter((layer) => layer.type === "one_more_nav")
        .length,
      overview: layers.filter((layer) => layer.type === "overview").length,
      reports: layers.filter((layer) => layer.type === "reports").length,
      windows: layers.filter((layer) => layer.type === "windows").length,
    }),
    [layers]
  );

  const active = useMemo(
    () => ({
      analytics: count.analytics > 0,
      anotherNavItem: count.anotherNavItem > 0,
      export: count.export > 0,
      linux: count.linux > 0,
      macintoch: count.macintoch > 0,
      moreNavigation: count.moreNavigation > 0,
      navItem: count.navItem > 0,
      navItemAgain: count.navItemAgain > 0,
      oneMoreNav: count.oneMoreNav > 0,
      overview: count.overview > 0,
      reports: count.reports > 0,
      windows: count.windows > 0,
    }),
    [count]
  );

  return (
    <Grid.Column tablet={3} computer={3} only="tablet computer" id="sidebar">
      <Menu vertical borderless fluid text>
        <Menu.Item
          active={active.overview}
          as="a"
          onClick={() => {
            addLayer("overview");
          }}
        >
          Overview({count.overview})
        </Menu.Item>
        <Menu.Item
          active={active.reports}
          as="a"
          onClick={() => {
            addLayer("reports");
          }}
        >
          Reports({count.reports})
        </Menu.Item>
        <Menu.Item
          active={active.analytics}
          as="a"
          onClick={() => {
            addLayer("analytics");
          }}
        >
          Analytics({count.analytics})
        </Menu.Item>
        <Menu.Item
          active={active.export}
          as="a"
          onClick={() => {
            addLayer("export");
          }}
        >
          Export({count.export})
        </Menu.Item>
        <Divider hidden />
        <Menu.Item
          active={active.navItem}
          as="a"
          onClick={() => {
            addLayer("nav_item");
          }}
        >
          Nav item({count.navItem})
        </Menu.Item>
        <Menu.Item
          active={active.navItemAgain}
          as="a"
          onClick={() => {
            addLayer("nav_item_again");
          }}
        >
          Nav item again({count.navItemAgain})
        </Menu.Item>
        <Menu.Item
          active={active.oneMoreNav}
          as="a"
          onClick={() => {
            addLayer("one_more_nav");
          }}
        >
          One more nav({count.oneMoreNav})
        </Menu.Item>
        <Menu.Item
          active={active.anotherNavItem}
          as="a"
          onClick={() => {
            addLayer("another_nav_item");
          }}
        >
          Another nav item({count.anotherNavItem})
        </Menu.Item>
        <Menu.Item
          active={active.moreNavigation}
          as="a"
          onClick={() => {
            addLayer("more_navigation");
          }}
        >
          More navigation({count.moreNavigation})
        </Menu.Item>
        <Divider hidden />
        <Menu.Item
          active={active.macintoch}
          as="a"
          onClick={() => {
            addLayer("macintoch");
          }}
        >
          Macintoch({count.macintoch})
        </Menu.Item>
        <Menu.Item
          active={active.linux}
          as="a"
          onClick={() => {
            addLayer("linux");
          }}
        >
          Linux({count.linux})
        </Menu.Item>
        <Menu.Item
          active={active.windows}
          as="a"
          onClick={() => {
            addLayer("windows");
          }}
        >
          Windows({count.windows})
        </Menu.Item>
      </Menu>
    </Grid.Column>
  );
};

export default SideBar;
