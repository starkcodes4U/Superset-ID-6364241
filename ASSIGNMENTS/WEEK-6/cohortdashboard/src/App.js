import React from 'react';
import CohortCard from './components/CohortCard';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Cohort Dashboard</h1>
      <CohortCard title="Cohort Alpha" students={35} />
      <CohortCard title="Cohort Beta" students={42} />
    </div>
  );
}

export default App;
