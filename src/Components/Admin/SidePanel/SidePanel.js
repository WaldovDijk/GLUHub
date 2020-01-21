import React from "react";
import { Menu } from "semantic-ui-react";
import UserPanel from "./UserPanel";
import Channels from './Channels'
class SidePanel extends React.Component {
  render() {
    const { currentUser} = this.props;

    return (
      <Menu
        className="app"
        size="large"
        inverted
        fixed="left"
        vertical
        style={{fontSize: "1.2rem" }}
      >
        <UserPanel currentUser={currentUser} />
      </Menu>
    );
  }
}

export default SidePanel;