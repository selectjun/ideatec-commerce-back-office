import { useCallback, useState } from "react";
import { Button, Divider, Grid, Icon, Input, Menu } from "semantic-ui-react";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleDropdownMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <Grid padded className="tablet computer only">
        <Menu borderless inverted fluid fixed="top">
          <Menu.Item header as="a">
            Project name
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input placeholder="Search..." size="small" />
            </Menu.Item>
            <Menu.Item as="a">Dashboard</Menu.Item>
            <Menu.Item as="a">Settings</Menu.Item>
            <Menu.Item as="a">Profile</Menu.Item>
            <Menu.Item as="a">Help</Menu.Item>
          </Menu.Menu>
        </Menu>
      </Grid>
      <Grid padded className="mobile only">
        <Menu borderless inverted fluid fixed="top">
          <Menu.Item header as="a">
            Project Name
          </Menu.Item>
          <Menu.Menu position="right" className="abcd">
            <Menu.Item>
              <Button
                basic
                inverted
                icon
                toggle
                onClick={handleToggleDropdownMenu}
              >
                <Icon name="content" />
              </Button>
            </Menu.Item>
          </Menu.Menu>
          <Menu
            borderless
            fluid
            inverted
            vertical
            style={{ display: isOpen ? "flex" : "none" }}
          >
            <Menu.Item as="a">Dashboard</Menu.Item>
            <Menu.Item as="a">Settings</Menu.Item>
            <Menu.Item as="a">Profile</Menu.Item>
            <Menu.Item as="a">Help</Menu.Item>
            <Divider fitted />
            <Menu.Item>
              <Input placeholder="Search..." size="small" />
            </Menu.Item>
          </Menu>
        </Menu>
      </Grid>
    </>
  );
};

export default Header;
