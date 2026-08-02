import React from 'react';

export default function NotFound({ setCurrentPage }) {
  return (
    <div
      className="animate-fade-in"
      style={{
        padding: '80px 24px',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(3.5rem, 12vw, 7rem)',
          fontWeight: 700,
          lineHeight: 1
        }}
        className="text-gradient"
      >
        404
      </span>
      <h2 style={{ color: 'var(--text-primary)', marginTop: '18px', fontSize: '1.5rem' }}>
        Halaman tidak ditemukan
      </h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '440px', margin: '12px 0 32px', fontFamily: 'var(--font-sans)' }}>
        Alamat yang kamu buka tidak ada atau sudah dipindahkan. Yuk kembali ke halaman utama.
      </p>
      <button onClick={() => setCurrentPage('home')} className="btn-gradient">
        Kembali ke Home
      </button>
    </div>
  );
}
