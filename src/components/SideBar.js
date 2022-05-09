import React from 'react'
import '../styles/SideBar.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {IconButton, Avatar} from '@mui/material';

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />
                <div className="sidebar_right">
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search"></div>
            <div className="sidebar_chats"></div>
        </div>
    )
}

export default SideBar;