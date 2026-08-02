import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import EquityResearch from './pages/EquityResearch';
import EquityResearchDetail from './pages/EquityResearchDetail';
import Activities from './pages/Activities';
import ActivityDetail from './pages/ActivityDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// --- Lightweight URL <-> page-state mapping (no external router needed) ---
// Keeps the current page/id in the address bar so a refresh (or a shared
// link) lands back on the same page instead of always resetting to Home.
function pageToPath(page, projectId, activityId, equityId) {
  switch (page) {
    case 'home':
      return '/';
    case 'projects':
      return '/projects';
    case 'project-detail':
      return projectId != null ? `/projects/${projectId}` : '/projects';
    case 'equity-research':
      return '/equity-research';
    case 'equity-detail':
      return equityId != null ? `/equity-research/${equityId}` : '/equity-research';
    case 'activities':
      return '/activities';
    case 'activity-detail':
      return activityId != null ? `/activities/${activityId}` : '/activities';
    case 'contact':
      return '/contact';
    case 'not-found':
      return window.location.pathname;
    default:
      return '/';
  }
}

function pathToState(pathname) {
  const parts = pathname.split('/').filter(Boolean);

  if (parts.length === 0) {
    return { page: 'home', projectId: null, activityId: null, equityId: null };
  }

  if (parts[0] === 'projects') {
    if (parts[1] !== undefined) {
      const id = Number(parts[1]);
      return { page: 'project-detail', projectId: Number.isNaN(id) ? parts[1] : id, activityId: null, equityId: null };
    }
    return { page: 'projects', projectId: null, activityId: null, equityId: null };
  }

  if (parts[0] === 'equity-research') {
    if (parts[1] !== undefined) {
      const id = Number(parts[1]);
      return { page: 'equity-detail', projectId: null, activityId: null, equityId: Number.isNaN(id) ? parts[1] : id };
    }
    return { page: 'equity-research', projectId: null, activityId: null, equityId: null };
  }

  if (parts[0] === 'activities') {
    if (parts[1] !== undefined) {
      const id = Number(parts[1]);
      return { page: 'activity-detail', projectId: null, activityId: Number.isNaN(id) ? parts[1] : id, equityId: null };
    }
    return { page: 'activities', projectId: null, activityId: null, equityId: null };
  }

  if (parts[0] === 'contact') {
    return { page: 'contact', projectId: null, activityId: null, equityId: null };
  }

  return { page: 'not-found', projectId: null, activityId: null, equityId: null };
}

function App() {
  // Read the initial page straight from the URL so a hard refresh restores
  // whatever page/detail the user was on instead of bouncing to Home.
  const initialState = pathToState(window.location.pathname);

  const [currentPage, setCurrentPageState] = useState(initialState.page);
  const [selectedProjectId, setSelectedProjectIdState] = useState(initialState.projectId);
  const [selectedActivityId, setSelectedActivityIdState] = useState(initialState.activityId);
  const [selectedEquityId, setSelectedEquityIdState] = useState(initialState.equityId);

  // Refs mirror the ids synchronously so that when a page's click handler
  // calls setSelectedProjectId(id) immediately followed by setCurrentPage(id),
  // the URL we push already has the correct id (React state updates are async/batched).
  const projectIdRef = useRef(initialState.projectId);
  const activityIdRef = useRef(initialState.activityId);
  const equityIdRef = useRef(initialState.equityId);

  const setSelectedProjectId = (id) => {
    projectIdRef.current = id;
    setSelectedProjectIdState(id);
  };

  const setSelectedActivityId = (id) => {
    activityIdRef.current = id;
    setSelectedActivityIdState(id);
  };

  const setSelectedEquityId = (id) => {
    equityIdRef.current = id;
    setSelectedEquityIdState(id);
  };

  const setCurrentPage = (page) => {
    setCurrentPageState(page);
    const path = pageToPath(page, projectIdRef.current, activityIdRef.current, equityIdRef.current);
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    window.scrollTo(0, 0);
  };

  // Support the browser Back/Forward buttons too.
  useEffect(() => {
    const handlePopState = () => {
      const state = pathToState(window.location.pathname);
      setCurrentPageState(state.page);
      projectIdRef.current = state.projectId;
      activityIdRef.current = state.activityId;
      equityIdRef.current = state.equityId;
      setSelectedProjectIdState(state.projectId);
      setSelectedActivityIdState(state.activityId);
      setSelectedEquityIdState(state.equityId);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Render current page component based on router state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'projects':
        return (
          <Projects
            setCurrentPage={setCurrentPage}
            setSelectedProjectId={setSelectedProjectId}
          />
        );
      case 'project-detail':
        return (
          <ProjectDetail
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            selectedProjectId={selectedProjectId}
          />
        );
      case 'equity-research':
        return (
          <EquityResearch
            setCurrentPage={setCurrentPage}
            setSelectedEquityId={setSelectedEquityId}
          />
        );
      case 'equity-detail':
        return (
          <EquityResearchDetail
            setCurrentPage={setCurrentPage}
            selectedEquityId={selectedEquityId}
          />
        );
      case 'activities':
        return (
          <Activities
            setCurrentPage={setCurrentPage}
            setSelectedActivityId={setSelectedActivityId}
          />
        );
      case 'activity-detail':
        return (
          <ActivityDetail
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            selectedActivityId={selectedActivityId}
          />
        );
      case 'contact':
        return <Contact />;
      case 'not-found':
        return <NotFound setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main style={{ flexGrow: 1, width: '100%' }}>
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
