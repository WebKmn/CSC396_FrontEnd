import React from 'react'
import styled from 'styled-components';
import {IconButton, Avatar} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../images/logo192.png';
import {useStateValue} from '../store/StateProvider';
import {logOut} from '../actions/authActions';

const Header = () => {
    // eslint-disable-next-line no-empty-pattern
    const [{user}, dispatch] = useStateValue();

    const signOut = () => {
        logOut(dispatch);
    }
    return(
        <HeaderWrapper>
            <HeaderLeft>
                <div className="header_info">
                    <Avatar src={user?.photoURL}/>
                    <h4>{user?.displayName}</h4>
                </div>
            </HeaderLeft>
            <HeaderCenter>
                <img className="header_logo" src={logo} alt="header icon" />
            </HeaderCenter>
            <HeaderRight>
                <IconButton onClick={signOut}>
                    <LogoutIcon fontSize="large" className="header_icon"/>
                </IconButton>
            </HeaderRight>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
  top: 0;
  z-index: 100;
  display: flex;
  position: sticky;
  padding: 15px 20px;
  align-items: center;
  background-color: white;
  justify-content: space-between;
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
`
const HeaderLeft = styled.div`
  display: flex;
  img {
    height: 40px;
  }
  justify-content: space-evenly;
  .header_info {
    display: flex;
    align-items: center;
    h4 {
      margin-right: 10px;
    }
  }
`
const HeaderCenter = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  img {
    height: 40px;
  }
`
const HeaderRight = styled.div`
  display: flex;
`

export default Header;