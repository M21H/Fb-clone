import { Avatar } from '@material-ui/core'
import React from 'react'
import './MessageSender.css'
import { useStateValue } from '../../../StateProvider'
import firebase from 'firebase'
import db from '../../../firebase'

import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

const MessageSender = () => {
  const [{ user }, dispatch] = useStateValue()
  const [input, setInput] = React.useState('')
  const [imageUrl, setImageUrl] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault()

    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    })

    setInput('')
    setImageUrl('')
  }

  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={`Whats's on your mind, ${user.displayName}?`}
            className='messageSender__input'
          />
          <input
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            placeholder='Image URL (Optional)'
          />
          <button onClick={handleSubmit} type='submit'>
            Handle submit
          </button>
        </form>
      </div>

      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>

        <div className='messageSender__option'>
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>

        <div className='messageSender__option'>
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
