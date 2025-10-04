import React, { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import Main from './pages/Main';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box
        sx={{
          width: isSidebarOpen ? '200px' : '60px',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 10,
          transition: 'width 0.3s ease',
        }}
      >
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          marginLeft: isSidebarOpen ? '200px' : '60px',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          transition: 'margin-left 0.3s ease',
        }}
      >
        <Box sx={{ position: 'sticky', top: 0, zIndex: 9, backgroundColor: '#fff' }}>
          <Header />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            padding: '20px',
            backgroundColor: '#f9fafc',
            overflowY: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <Main />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
