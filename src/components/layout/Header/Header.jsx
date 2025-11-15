// src/components/layout/Header/Header.jsx
'use client';

import React from 'react';

import BottomBar from '@/components/common/BottomBar/BottomBar';
import './Header.scss';

function Header({ navLinks, socialLinks }) {
  return (
    <header className="header">
      <BottomBar navLinks={navLinks} socialLinks={socialLinks} />
    </header>
  );
}

export default Header;
