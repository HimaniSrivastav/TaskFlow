// App.jsx
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Landing page components
import Header from './component/homePage/Header';
import Hero from './component/homePage/Hero';
import StatsSection from './component/homePage/StatsSection';
import TestimonialSection from './component/homePage/TestimonialSection';
import CTASection from './component/homePage/CTASection';
import Footer from './component/homePage/Footer';
import Background from './component/Background';
import Features from './component/homePage/Features';
// import DashboardMain from './component/User/DashboardMain'; 

// Auth
import SignIn from './authentication/SignIn';
import SignUp from './authentication/SignUp';

// Dashboard components
import DashboardHeader from './component/User/Header';
import Sidebar from './component/User/Sidebar';

// Main dashboard components
// import TaskDashboard from './component/User/DashboardMain/TaskDashboard';

// User management components
import UserManagement from './component/User/UserArea/UserMAnagement';

// Task area components
// import TaskTable from './component/User/TaskArea/TaskTable';
// import TaskFilter from './component/User/TaskArea/TaskFilter';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <Background />
      <Header />
      <main>
        <Hero />
        <Features />
        <StatsSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
      {/* <DashboardMain /> */}
    </div>
  );
}

function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <DashboardHeader />
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Tasks</h2>
          <p className="text-gray-500 mb-4">Manage and track your tasks</p>
          {/* <TaskFilter />
          <TaskTable /> */}
          {/* <TaskDashboard /> */}
          <UserManagement />  
        </section>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
