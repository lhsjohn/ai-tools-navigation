// src/components/Header.tsx

import React from 'react';

export default function Header() {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <img
          src="/images/logo.png"
          alt="AI Tools Navigation"
          style={{ height: '40px', marginRight: '10px' }}
        />
        <h1 style={titleStyle}>AI Tools Navigation</h1>
      </div>
      <nav>
        <a href="/" style={linkStyle}>
          Home
        </a>
        <a href="/tools" style={linkStyle}>
          Tools
        </a>
        <a href="/about" style={linkStyle}>
          About
        </a>
      </nav>
    </header>
  );
}

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#0070f3',
  color: '#fff',
};

const logoStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '1.5em',
};

const linkStyle: React.CSSProperties = {
  color: '#fff',
  margin: '0 10px',
  textDecoration: 'none',
  fontSize: '1em',
};
