import React from 'react';
import styles from './CohortCard.module.css';

const CohortCard = ({ title, students }) => {
  const inlineStyle = {
    border: '2px solid #0a74da',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f0f8ff',
    color: '#333',
  };

  return (
    <div className={styles.card} style={inlineStyle}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>Total Students: {students}</p>
    </div>
  );
};

export default CohortCard;
