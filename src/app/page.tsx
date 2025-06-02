// src/app/page.tsx
import Link from 'next/link';
// import Layout from '../components/Layout'; // Likely remove or adapt Layout for this page
import { getGalleryFolders } from '../utils/galleryUtils';

async function getGalleryList() {
  return await getGalleryFolders();
}

export default async function HomePage() {
  const galleryFolders = await getGalleryList();

  return (
    // Using a fragment <></> as the root or a simple <div> if no Layout
    <>
      <video
        autoPlay
        muted
        loop
        playsInline // Important for iOS to play inline
        style={{
          position: 'fixed',
          width: '100vw', // Viewport width
          height: '100vh', // Viewport height
          left: '0',
          top: '0',
          objectFit: 'cover', // Ensures video covers the area, might crop
          zIndex: -1,       // Places video behind other content
        }}
      >
        <source src="/videos/main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        style={{
          position: 'fixed', // Fixed position in the viewport
          top: '30px',       // Adjust spacing from top
          left: '30px',      // Adjust spacing from left
          backgroundColor: 'rgba(0, 0, 0, 0.75)', // Black with 75% opacity
          padding: '25px',
          borderRadius: '15px', // For the "bubble" effect
          color: 'white',       // Text color inside the bubble
          maxWidth: '400px',    // Max width of the bubble
          zIndex: 1,          // Ensures bubble is on top of the video
        }}
      >
        <h1>My Portfolio</h1>
        <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
          Welcome to my online portfolio. Browse through my work:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: '0', marginTop: '15px' }}>
          {galleryFolders.map((folder) => (
            <li key={folder} style={{ marginBottom: '10px' }}>
              <Link
                href={`/gallery/${folder}`}
                style={{
                  color: '#61dafb', // A light blue, change as you like
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                {/* Capitalize folder name */}
                {folder.charAt(0).toUpperCase() + folder.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
    // If you were using <Layout>, it might interfere.
    // You'd need to ensure Layout allows full-screen content.
  );
}