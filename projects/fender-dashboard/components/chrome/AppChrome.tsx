import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface AppChromeProps {
  children: React.ReactNode;
}

export function AppChrome({ children }: AppChromeProps) {
  return (
    <div className="fender-chrome">
      <Header />
      <div className="fender-chrome__body">
        <Sidebar />
        <main className="fender-chrome__main" id="fender-dashboard-main">
          {children}
        </main>
      </div>
    </div>
  );
}
