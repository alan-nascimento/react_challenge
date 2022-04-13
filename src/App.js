import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import DashBoardPage from './pages/dashboard/DashBoardPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DashBoardPage />
    </QueryClientProvider>
  );
};

export default App;
