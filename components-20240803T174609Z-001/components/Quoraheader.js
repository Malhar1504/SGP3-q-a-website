import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltOutlined from '@mui/icons-material/PeopleAltOutlined';
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined';
import FeaturedPlayListOutlined from '@mui/icons-material/FeaturedPlayListOutlined';
import Search from '@mui/icons-material/Search';

import { Avatar, Button } from '@mui/material';

import './css/qheader.css'; // Updated to match the file name used in your main code

function QuoraHeader() {
  return (
    <div className='qHeader'>
      <div className='qHeader-content'>
        <div className='qHeader__logo'>
          <img src='https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif' alt='logo'/>
        </div>

        <div className='qHeader__icons'>
          <div className='qHeader__icon'>
            <HomeIcon />
          </div>
          <div className='qHeader__icon'>
            <FeaturedPlayListOutlined />
          </div>
          <div className='qHeader__icon'>
            <PeopleAltOutlined />
          </div>
          <div className='qHeader__icon'>
            <NotificationsOutlined />
          </div>
        </div>

        <div className='qHeader__input'>
          <Search />
          <input type='text' placeholder='Search Questions ' />
        </div>

        <div className='qHeader__Rem'>
          <Avatar />
          <Button> Add Questions </Button>
        </div>
      </div>
    </div>
  );
}

export default QuoraHeader;
