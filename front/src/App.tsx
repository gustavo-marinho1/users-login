import './App.css';
import ThemeProvider from './contexts/theme-context';
import Router from './router/Index';

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  )
}

export default App