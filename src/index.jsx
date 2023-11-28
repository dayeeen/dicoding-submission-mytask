import React from 'react';
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';
import TaskApp from './components/TaskApp.jsx';

const root = createRoot(document.getElementById('root'));
root.render(<TaskApp />);