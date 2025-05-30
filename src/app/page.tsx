// src/app/page.tsx
import Link from 'next/link';
import Layout from '../components/Layout';
import { getGalleryFolders } from '../utils/galleryUtils';

async function getGalleryList() {
  return await getGalleryFolders();
}

export default async function HomePage() {
  const galleryFolders = await getGalleryList();

  return (
    <Layout>
      <h1>My Portfolio</h1>
      <p>Welcome to my online portfolio. Browse through my work:</p>
      <ul>
        {galleryFolders.map((folder) => (
          <li key={folder}>
            <Link href={`/gallery/${folder}`}>
              {folder.charAt(0).toUpperCase() + folder.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}