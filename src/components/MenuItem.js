import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ to, src, title, onClick }) => (
  <Link to={to} className="flex items-center" onClick={onClick}>
    <img src={src} alt={title} className="mr-2" />
    <span>{title}</span>
  </Link>
);

export default MenuItem;
