// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          {/* You could dynamically generate more nav links here if needed */}
        </ul>
      </nav>
      <main>{children}</main>
      <footer>
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      </footer>
    </div>
  );
};

export default Layout;