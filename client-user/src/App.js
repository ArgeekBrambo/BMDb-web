import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, Feed, MovieDetail, SearchFeed } from './components'

const App = () => (
    <div>
      <BrowserRouter>
        <Box sx={{}} className="bg-green-300">
          <Navbar />
          <Routes>
            <Route path="/" exact element={ <Feed /> }/>
            <Route path="/movie/:id" element={ <MovieDetail /> }/>
            <Route path="/search/:searchTerm" element={ <SearchFeed /> }/>
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
)

export default App
