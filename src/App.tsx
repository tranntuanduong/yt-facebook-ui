import MainLayout from "layouts/MainLayout";
import Sidebar, { StyledSidebar } from "layouts/Sidebar";
import { StyledApp } from "layouts/styled";
import React from "react";
import "./App.css";

function App() {
  return (
    <MainLayout>
      <StyledApp>
        <Sidebar />

        <div>Main content</div>
        <StyledSidebar>Right sidebar</StyledSidebar>
      </StyledApp>
    </MainLayout>
  );
}

export default App;
