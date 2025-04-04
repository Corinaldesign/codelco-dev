import React from 'react';
import Layout from './components/Layout/Layout';
import { ChatProvider } from './contexts/ChatContext';

// No importamos los estilos globales aquí para evitar duplicación
// ya están importados en main.tsx

function App() {
  return (
    <ChatProvider>
      <Layout />
    </ChatProvider>
  );
}

export default App;