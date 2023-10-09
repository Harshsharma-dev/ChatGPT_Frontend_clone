import "./App.css";
import LogoSpacing from "./components/LogoSpacing";
import SearchBar from "./components/SearchBar";
import SidebarMain from "./components/SidebarMain";
import VersionToggle from "./components/VersionToggle";
export default function App() {
  return (
    <div className="App flex overflow-hidden">
      {/* <div className="sidebar"> */}
      <SidebarMain />

      {/* </div> */}
      <div className="content container">
        {/* <div className="flex h-full flex-col items-center justify-between pb-64"> */}
        <VersionToggle />
        <LogoSpacing />
        <SearchBar />
        {/* </div> */}
      </div>
    </div>
  );
}
