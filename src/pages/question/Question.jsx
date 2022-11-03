import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router';

export const Question = () => {
  const navigate = useNavigate();

  useState(() => {
    if (String(window.location.pathname).toLowerCase() == '/question') {
      navigate('/', { replace: true });
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};
