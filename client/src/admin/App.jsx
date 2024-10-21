import React from 'react'
import DefaultLayout from './Layout/DefaultLayouts'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      {/* <Toaster
        position="top-center"
        reverseOrder={false}
      /> */}
      <DefaultLayout />
    </>
  )
}

export default App