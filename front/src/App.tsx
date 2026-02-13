import './App.css';
import ThemeProvider from './contexts/use-theme';
import Router from './router/Index';

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  )
}

export default App