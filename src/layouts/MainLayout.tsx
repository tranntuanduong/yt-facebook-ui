import Header from "components/Header";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { StyledApp, StyledMainLayout } from "./styled";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <StyledMainLayout>
      <Header />

      {children}
    </StyledMainLayout>
  );
};

export default MainLayout;
