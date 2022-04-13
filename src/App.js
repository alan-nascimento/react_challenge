import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DashboardPage } from './pages';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardPage />
    </QueryClientProvider>
  );
};

export default App;
