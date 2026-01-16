import React from 'react'
import UIUXHero from '../../components/Process/UIUX/UIUXHero'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import UIUXProcesssection from '../../components/Process/UIUX/UIUXProcesssection'
import UIUXToolsUsed from '../../components/Process/UIUX/UIUXToolsUsed'
import UIUXProjectSection from '../../components/Process/UIUX/UIUXProjectSection'
import BookingForm from '../../components/BookingForm'

const UIUXProcess = () => {
  return (
    <div>
        <Header/>
        <UIUXHero/>
        <UIUXProcesssection/>
        <UIUXProjectSection/>
        <UIUXToolsUsed/>
        <BookingForm/>
        <Footer/>
    </div>
  )
}

export default UIUXProcess