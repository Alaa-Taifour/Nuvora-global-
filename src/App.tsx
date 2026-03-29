import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { Overview } from './pages/dashboard/Overview';
import { Generator } from './pages/dashboard/Generator';
import { Chat } from './pages/Chat';
import { ErrorBoundary } from './components/ErrorBoundary';
import { testConnection } from './lib/firebase';

export default function App() {
  useEffect(() => {
    testConnection();
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AuthProvider>
          <Router>
            <div className="min-h-screen bg-navy-950">
              <Routes>
                <Route path="/" element={<><Navbar /><LandingPage /></>} />
                <Route path="/login" element={<><Navbar /><LoginPage /></>} />
                
                {/* Dashboard Routes */}
                <Route path="/dashboard" element={<DashboardLayout />}>
                  <Route index element={<Overview />} />
                  <Route path="seo" element={<Generator />} />
                  <Route path="brand" element={<Generator />} />
                  <Route path="security" element={<Generator />} />
                  <Route path="history" element={<Generator />} />
                  <Route path="billing" element={<Generator />} />
                  <Route path="settings" element={<Generator />} />
                </Route>

                <Route path="/chat" element={<Chat />} />
              </Routes>
            </div>
          </Router>
        </AuthProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
