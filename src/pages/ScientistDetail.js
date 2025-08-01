import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/scientists.json'; // assuming JSON contains `id` field
import '../components/styles/ScientistDetail.css';



function ScientistDetail() {
  const { id } = useParams();
  const scientist = data.find(s => s.id === id);

  if (!scientist) return <div>Scientist not found</div>;

  return (
    <div className="detail-container">
      <img src={`/images/${scientist.image}`} alt={scientist.name} className="detail-image" />
      <h2>{scientist.name}</h2>
      <h4>{scientist.period}</h4>
      <p>{scientist.description}</p> {/* Add full description in JSON */}
    </div>
  );
}

export default ScientistDetail;
