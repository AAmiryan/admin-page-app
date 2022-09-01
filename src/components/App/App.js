import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import GraphAnalytics from "../GraphAnalytics/GraphAnalytics";
import GraphDirectory from "../GraphDirectory/GraphDirectory";
import MainPage from "../MainPage/MainPage";
import UserManagement from "../UserManagement/UserManagement";

import "./App.css";

function App() {
  return (
    <div className="appContainer">
    <MainPage />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/graph-directory" element={<GraphDirectory />} />
        <Route path="/graph-analytics" element={<GraphAnalytics />} />
      </Routes>
    </div>
  );
}

export default App;
