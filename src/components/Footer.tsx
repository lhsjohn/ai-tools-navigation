// src/components/Footer.tsx

import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>© 2025 AI Tools Navigation | All Rights Reserved</p>
      <p>
        Built with <a href="https://nextjs.org" style={linkStyle}>Next.js</a>
      </p>
    </footer>
  );
}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '10px 20px',
  backgroundColor: '#222',
  color: '#fff',
  marginTop: 'auto',
};

const linkStyle: React.CSSProperties = {
  color: '#0070f3',
  textDecoration: 'none',
};
