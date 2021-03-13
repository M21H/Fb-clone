import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow/SidebarRow'

import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import EventIcon from '@material-ui/icons/Event'
import RestoreIcon from '@material-ui/icons/Restore'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import FlagIcon from '@material-ui/icons/Flag'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { useStateValue } from '../../StateProvider'

function Sidebar() {

  const [{ user }, dispatch] = useStateValue()

  return (
    <div className='sidebar'>
      <SidebarRow
        src={user.photoURL}
        title={user.displayName}
      />
      <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />
      <SidebarRow Icon={PeopleAltIcon} title='Friends' />
      <SidebarRow Icon={SupervisedUserCircleIcon} title='Groups' />
      <SidebarRow Icon={LiveTvIcon} title='Watch' />
      <SidebarRow Icon={EventIcon} title='Events' />
      <SidebarRow Icon={RestoreIcon} title='Memories' />
      <SidebarRow Icon={BookmarkIcon} title='Saved' />
      <SidebarRow Icon={FlagIcon} title='Pages' />
      <SidebarRow Icon={ArrowDropDownIcon} title='See More' />
    </div>
  )
}

export default Sidebar
