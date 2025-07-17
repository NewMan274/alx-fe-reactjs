import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '15px 0',
      position: 'relative',
      bottom: 0,
      width: '100%',
      marginTop: '40px'
    }}>
      <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
