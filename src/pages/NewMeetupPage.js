import React from 'react'
import { useHistory } from 'react-router-dom'

import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetupPage() {
  const history = useHistory()

  const addMeetupHandler = (meetupData) => {
    fetch(`https://react-meetup-e6b44-default-rtdb.firebaseio.com/meetups.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(meetupData),
    }).then(() => {
      history.replace('/')
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetupPage
