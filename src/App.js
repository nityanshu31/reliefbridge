// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';

import Userhome from './pages/Userhome';
import ReportIncident from './components/ReportIncident';
import EmergencySOS from './components/EmergencySOS';
import EmergencyHospitality from './components/EmergencyHospitality';
import FinancialServices from './components/FinancialServices';
import DonationPage from './components/DonationPage';
import MapPage from './pages/MapPage';
import EmergencyServices from './components/EmergencyServices';
import OfflineEmergencyPage from './pages/OfflineEmergencyPage'; // Import the offline page
import Campaigns from './pages/Campaigns';
import FinanceServices from './pages/Insurance';
import SignIn from './pages/SignIn';

// Dashboard imports
import HospitalityDashboard from './pages/HospitalityDashboard';
import FinanceDashboard from './pages/FinanceDashboard';
import RetailDashboard from './pages/RetailDashboard';
import Training from './pages/Training';
import Updates from './pages/Updates';
import Meetings from './pages/Meetings';
import TaskAssign from './pages/TaskAssign';
import TeamMember from './pages/TeamMember';
import VolunteerHome from './pages/VolunteerHome';
import Signup from './pages/Signup';
import Login from './pages/Login';
import LoanPage from './pages/Loan';
import FinancialAid from './pages/FinancialAid';
import AccommodationPage from './pages/AccommodationPage';
import PoliceService from './pages/PoliceService';
import FireService from './pages/FireService';
import AmbulanceService from './pages/AmbulanceService';
import DisasterService from './pages/DisasterService';
import RailwayService from './pages/RailwayService';
import RoadService from './pages/RoadService';
import CyberService from './pages/CyberService';
import ForestService from './pages/ForestService';
import FoodAndWaterPage from './pages/FoodAndWaterPage';
import ChatbotIframe from './components/ChatbotIframe';
import BlogPage from './pages/BlogPage';
import BlogDetails from './pages/BlogDetails';
import RequestMap from './components/RequestMap';

import NearbyVolunteers from './pages/NearbyVolunteers';
import QuizGame from './components/QuizGame';

const App = () => {
  // const [isOffline, setIsOffline] = useState(!navigator.onLine);

  // useEffect(() => {
  //   const handleOnline = () => setIsOffline(false);
  //   const handleOffline = () => setIsOffline(true);

  //   window.addEventListener('online', handleOnline);
  //   window.addEventListener('offline', handleOffline);

  //   return () => {
  //     window.removeEventListener('online', handleOnline);
  //     window.removeEventListener('offline', handleOffline);
  //   };
  // }, []);

  // if (isOffline) {
  //   return <OfflineEmergencyPage />;
  // }

  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/accommodations" element={<AccommodationPage/>} />
        <Route path="/userhome" element={<Userhome />} />
        <Route path="/quizgame" element={<QuizGame/>} />
        <Route path="/loans" element={<LoanPage/>} />
        <Route path="/financial-aid" element={<FinancialAid/>} />
        <Route path="/report-incident" element={<ReportIncident />} />
        <Route path="/sos" element={<EmergencySOS />} />
        <Route path="/emergency-hospitality" element={<EmergencyHospitality />} />
        <Route path="/financial-services" element={<FinancialServices />} />
        <Route path="/donation" element={<DonationPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/blog/:id" element={<BlogDetails/>} />
        <Route path="/emergency-services" element={<EmergencyServices />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/finance-service" element={<FinanceServices />} />
        <Route path="/training" element={<Training/>} />
        <Route path="/requests" element={<RequestMap/>} />
        <Route path="/askforhelp" element={<NearbyVolunteers/>} />
          <Route path="/updates" element={<Updates/>} />
          <Route path="/meetings" element={<Meetings/>} />
          <Route path="/task-assign" element={<TaskAssign/>} />
          <Route path="/team-member" element={<TeamMember/>} />
          <Route path="/volunteer-dashboard" element={<VolunteerHome/>} />
        {/* Dashboard routes */}
        <Route path="/dashboard/hospitality" element={<HospitalityDashboard />} />
        <Route path="/dashboard/finance" element={<FinanceDashboard />} />
        <Route path="/dashboard/retail" element={<RetailDashboard />} />
        {/* Emergency Services routes */}
        <Route path="/police-service" element={<PoliceService/>} />
        <Route path="/fire" element={<FireService/>} />
        <Route path="/ambulance" element={<AmbulanceService/>} />
        <Route path="/disaster" element={<DisasterService/>} />
        <Route path="/railway" element={<RailwayService/>} />
        <Route path="/roadservice" element={<RoadService/>} />
        <Route path="/cyber" element={<CyberService/>} />
        <Route path="/forest" element={<ForestService/>} />
        <Route path="/food-and-water" element={<FoodAndWaterPage/>} />
        {/* Redirect to home page if the route does not match */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    <ChatbotIframe/>
    </div>
  );
};

export default App;
