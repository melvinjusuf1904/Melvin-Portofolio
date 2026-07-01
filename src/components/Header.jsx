import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Header({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'My Projects' },
    { id: 'activities', label: 'Activities' },
    { id: 'contact', label: "Let's Connect" }
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setIsOpen(false);
  };

  return (
    <header className="header-glass">
      <div className="container" style={{ display: 'flex', alignItems: 'center', padding: '16px 24px', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div
          className="logo-container"
          onClick={() => handleNavClick('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <span
            style={{
              width: 30,
              height: 30,
              borderRadius: 9,
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 13,
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              color: '#0B0E14',
              flexShrink: 0
            }}
          >
            {PROFILE.initials?.[0] || 'M'}
          </span>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
            Melvin's Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="md-flex" style={{ gap: '8px' }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
              style={{ border: 'none', background: currentPage === item.id ? undefined : 'transparent' }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md-hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md-hidden glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '8px 16px', padding: '16px' }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
              style={{
                border: 'none',
                background: currentPage === item.id ? undefined : 'transparent',
                textAlign: 'left',
                width: '100%',
                display: 'block'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
