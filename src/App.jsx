import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';


function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
        <h1>Version: 4.0</h1>
        <h1>Workflow_dispatch_version: {process.env.WORKFLOW_DISPATCH_VERSION}</h1>
        <h1>Environment_choice: {process.env.ENVIRONMENT_CHOICE}</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
