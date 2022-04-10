import React from 'react';
import { Route, Routes } from 'react-router';
import { Typography } from '@mui/material';

import AboutUsPage from './pages/AboutUsPage';
import CommunityPage from './pages/CommunityPage';
import DonationsPage from './pages/DonationsPage';
import DonorsPage from './pages/DonorsPage';
import GameDetailsPage from './pages/GameDetailsPage';
import GamesPage from './pages/GamesPage';
import HighScorePage from './pages/HighScorePage';
import LandingPage from './pages/LandingPage';
import ParticipatePage from './pages/ParticipatePage';
import PreviewPage from './pages/PreviewPage';
import SchedulePage from './pages/SchedulePage';
import SettingsPage from './pages/SettingsPage';

const Router = props => {
  return (
    <Routes>
      <Route path='/aboutus' exact element={<AboutUsPage />} />
      <Route path='/community' exact element={<CommunityPage />} />
      <Route path='/donations' element={<DonationsPage />} />
      <Route path='/donors' element={<DonorsPage />} />
      <Route path='/games/:id' element={<GameDetailsPage />} />
      <Route path='/games' element={<GamesPage />} />
      <Route path='/highscore' exact element={<HighScorePage />} />
      <Route path='/participate' exact element={<ParticipatePage />} />
      <Route path='/preview' exact element={<PreviewPage />} />
      <Route path='/schedule' exact element={<SchedulePage />} />
      <Route path='/settings' exact element={<SettingsPage />} />
      <Route path='/' exact element={<LandingPage />} />
      <Route path='*' element={<Typography variant="h2">Page Not Found</Typography>}/>
    </Routes>
  );
}

export default Router;