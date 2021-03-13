import React from 'react'
import './Header.css'

import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import GroupIcon from '@material-ui/icons/Group'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

import { Avatar, IconButton } from '@material-ui/core'
import { useStateValue } from '../../StateProvider'

function Header() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg'
          alt=''
        />

        <div className='header__input'>
          <SearchIcon style={{color: 'grey'}} />
          <input placeholder='Search Facebook' type='text' />
        </div>
      </div>

      <div className='header__center'>
        <div className='header__option header__option--active'>
          <HomeIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <LiveTvIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <GroupIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SupervisedUserCircleIcon fontSize='large' />
        </div>
      </div>

      <div className='header__right'>
        <Avatar src={user.photoURL} />
        <h4>{user.displayName}</h4>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Header
