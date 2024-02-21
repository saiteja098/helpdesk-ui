import React, { useState } from 'react';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import InsightsIcon from '@mui/icons-material/Insights';
import Avatar from '@mui/material/Avatar';
import RefreshIcon from '@mui/icons-material/Refresh';
import SegmentIcon from '@mui/icons-material/Segment';
import Button from '@mui/material/Button';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SendIcon from '@mui/icons-material/Send';


function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  const ChatListItem = () => {
    return (
      <div className="item">
        <div className="itemHeaders">
          <div className="itemHeaderLeft">
            <input type="checkbox" id="customerName" />
            <div className="itemSubHeaders">
              <h4 htmlFor="customerName">navya</h4>
              <h5 className="itemContext">context</h5>
            </div>
          </div>
          <p>time</p>
        </div>
        <div className="itemContent">
          <h5>title</h5>
          <span>message</span>
        </div>
      </div>
    );
  };

  const Paper = ({message}) => {

    return (
        <div className='paper' id='paper'>
          {message}
        </div>
    )
  }


  const Message = ({isCustomer}) => {
      // Define styles object
  const messageStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'flexStart',
    alignItems: 'end',
    padding: '10px',
  };

  const msgContentStyle = {

  }

  const messageInfoStyle = {
    textAlign: 'start',
  }

  // Conditionally modify styles if isCustomer is false
  if (!isCustomer) {
    messageStyle.flexDirection = 'row-reverse';
    messageStyle.order = -1;
    messageInfoStyle.textAlign = 'end';
    msgContentStyle.textAlign = 'end';
  }
    return (
      <div className="message" style={messageStyle}>
        <div className="messageProfile">
           <Avatar {...stringAvatar("Kent Dodds")} />
        </div>
        <div className='messageContent' >
          <Paper message={"hello"} />
          <Paper message={"hello there"} />
          <Paper message={"hello navya"} />
          <Paper message={"hello jk gpoeariognaoi noainsfoi"} />
          <div className="messageInfo" style={messageInfoStyle}>
            <h6>navya ~ time</h6>
          </div>
        </div>
      </div>
    );
  };



const Dashboard = () => {


    return (
      <div className="dashboard">
        <div className="components navbar">
          <div className="navItems">
            <div className="navItem">
              <LogoDevIcon fontSize="large" style={{color: "white"}} />
            </div>
            <div className="navItem">
              <ChatIcon fontSize="large" style={{color: "white"}} />
            </div>
            <div className="navItem">
              <GroupIcon fontSize="large" style={{color: "white"}} />
            </div>
            <div className="navItem">
              <InsightsIcon fontSize="large" style={{color: "white"}} />
            </div>
          </div>

          <div className="agentProfile">
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
            <div className="profilePic">
              <Avatar {...stringAvatar("Kent Dodds")} />
            </div>
          </div>
        </div>



        <div className="components chatList">
          <div className="header">
            <div className="subHeading">
              <SegmentIcon />
              <h2>Conversations</h2>
            </div>
            <RefreshIcon />
          </div>
          <div className="chatListItems">
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
          </div>
        </div>



        <div className="components conversations">
          <div className="conversationsHeader">
            <h2>navya</h2>
          </div>
          <div className="chatMessages">
            <Message isCustomer={true} />
            <Message />
            <Message isCustomer={true} />
            <Message />
          </div>
          <div className="sendMessage">
            <input
              type="text"
              className="writeMessage"
              placeholder="message navya"
            ></input>
            {/* <Button variant="contained" className='writeMsgBtn' endIcon={<SendIcon />}>
               Send
            </Button> */}
          </div>
        </div>


        <div className="components profile">
          <div className="customerProfile">
           <div className='profilePic'>
             <Avatar style={{ width: 74, height: 74 }} {...stringAvatar("Kent Dodds")}  />
           </div>
            <h3 className="profileName">Navya</h3>
            <h6 className="status">offline</h6>
            <div className='profileActionBtns'>
              <Button variant="outlined" style={{ color: 'grey' }}>
                <CallOutlinedIcon />
                call
              </Button>
              <Button variant="outlined" style={{ color: 'grey' }}>
                <AccountCircleOutlinedIcon />
                profile
              </Button>
            </div>
          </div>
          <div className="customerDetails">
            <h4>customer details</h4>
            <div className='details'>
                <label htmlFor='email'>email</label>
                <h5 id='email'>email address</h5>
            </div>
            <div className='details'>
                <label htmlFor='firstName'>First Name</label>
                <h5 id='firstName'>first name</h5>
            </div>
            <div className='details'>
               <label htmlFor='lastName'>Last Name</label>
                <h5 id='lastName'>last name</h5>
            </div>
            <h5 className='moreDetails'>view more details</h5>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;