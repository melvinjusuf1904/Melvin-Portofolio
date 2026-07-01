import { useState } from "react";
import NavBar from "./components/NavBar";
import SiteFooter from "./components/SiteFooter";
import HomePage from "./pages/HomePage";
import ProjectsListPage from "./pages/ProjectsListPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ActivitiesListPage from "./pages/ActivitiesListPage";
import ActivityDetailPage from "./pages/ActivityDetailPage";
import ConnectPage from "./pages/ConnectPage";
import { PROFILE } from "./data/portfolioData";

export default function Portfolio() {
  const [page, setPage] = useState("Home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleNavigate = (n) => {
    setSelectedProject(null);
    setSelectedActivity(null);
    setPage(n);
  };

  return (
    <div
      style={{
        background: "#0B0E14",
        color: "#C9D1E0",
        minHeight: "100vh",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <NavBar page={page} onNavigate={handleNavigate} />

      {/* ============ HOME PAGE ============ */}
      {page === "Home" && <HomePage onGoToProjects={() => handleNavigate("My Projects")} />}

      {/* ============ MY PROJECTS ============ */}
      {page === "My Projects" && !selectedProject && (
        <ProjectsListPage onSelectProject={setSelectedProject} />
      )}

      {/* ============ PROJECT DETAIL PAGE ============ */}
      {page === "My Projects" && selectedProject && (
        <ProjectDetailPage project={selectedProject} onBack={() => setSelectedProject(null)} />
      )}

      {/* ============ ACTIVITIES ============ */}
      {page === "Activities" && !selectedActivity && (
        <ActivitiesListPage onSelectActivity={setSelectedActivity} />
      )}

      {/* ============ ACTIVITY DETAIL PAGE ============ */}
      {page === "Activities" && selectedActivity && (
        <ActivityDetailPage activity={selectedActivity} onBack={() => setSelectedActivity(null)} />
      )}

      {/* ============ LET'S CONNECT ============ */}
      {page === "Let's Connect" && <ConnectPage />}

      <SiteFooter profile={PROFILE} />
    </div>
  );
}
