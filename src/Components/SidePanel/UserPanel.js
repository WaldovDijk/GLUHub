import React from "react";
import firebase from "../../firebase";
// import AvatarModal from './AvatarModal'


// prettier-ignore

import { Grid, Header, Icon, Image, Modal, Input, Button } from "semantic-ui-react";
class UserPanel extends React.Component {
  state = {
    user: this.props.currentUser,
    modal: false,

  };

  openModal = () => this.setState({ modal: true });

  closeModal = () => this.setState({ modal: false });

  

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("signed out!"));
  };

  render() {
    const { user, modal } = this.state;

    return (
      <Grid>
        <Grid.Column>
          <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
            <Header style={{ padding: "0.25em" }} as="h4" inverted>
              <h1>Good day, </h1>
              <h1 className="black-text" onClick={this.openModal}>{user.displayName}</h1>
              <Modal open={modal} onClose={this.closeModal}>
                <Modal.Header>Settings for {user.displayName}</Modal.Header>
                <Modal.Content image>
                  <Image wrapped size="small" src={user.photoURL} />
                  <Modal.Description>
                    <Button>Change Avatar</Button>
                    <Button onClick={this.handleSignout}>Sign out</Button>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                </Modal.Actions>
              </Modal>
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserPanel;
