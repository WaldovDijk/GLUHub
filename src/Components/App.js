import React from 'react'
import {Grid} from 'semantic-ui-react'
import '../css/App.css'
import {connect} from 'react-redux'
import SidePanel from './SidePanel/SidePanel'
import Messages from './Messages/Messages'
const App = ({currentUser, currentChannel, isPrivateChannel, userPosts}) => (
  <Grid columns="equal" className="app" style={{background: "#1b1c1d"}}>
    <SidePanel key={currentUser && currentUser.uid} currentUser={currentUser}/>
    <Grid.Column style={{marginLeft: 320}}>
      <Messages
        key={currentChannel && currentChannel.id}
        currentChannel={currentChannel}
        currentUser={currentUser}
        isPrivateChannel={isPrivateChannel}
      />
    </Grid.Column>
  </Grid>
)

const mapStateToProps = state => ({
  currentUser:state.user.currentUser,
  currentChannel:state.channel.currentChannel,
  isPrivateChannel:state.channel.isPrivateChannel
})
export default connect(mapStateToProps)(App);
