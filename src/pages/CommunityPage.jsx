import React from 'react';
import '../styles/Community.css';
import CommunityHero from '../components/community/CommunityHero';
import CommunityForums from '../components/community/CommunityForums';
import CommunityEvents from '../components/community/CommunityEvents';
import CommunityStories from '../components/community/CommunityStories';
import CommunityGroups from '../components/community/CommunityGroups';
import CommunitySupport from '../components/community/CommunitySupport';

const CommunityPage = () => {
  return (
    <main className="community-page">
      <CommunityHero />
      <CommunityForums />
      <CommunityEvents />
      <CommunityStories />
      <CommunityGroups />
      <CommunitySupport />
    </main>
  );
};

export default CommunityPage;