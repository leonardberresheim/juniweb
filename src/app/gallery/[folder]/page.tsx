// src/app/gallery/[folder]/page.tsx
import GalleryDisplay from '@/components/GalleryDisplay';
import Layout from '@/components/Layout';
import { getGalleryFolders, getGalleryImagePaths } from '@/utils/galleryUtils';

interface GalleryPageProps {
  params: {
    folder: string;
  };
}

export async function generateStaticParams() {
  const folders = await getGalleryFolders();
  return folders.map((folder) => ({ folder }));
}

async function getGalleryData(folder: string) {
  const images = await getGalleryImagePaths(folder);
  return { folderName: folder, images };
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  // Await the params object (though it might resolve immediately in this SSG context)
  const resolvedParams = await Promise.resolve(params);
  const { folder } = resolvedParams;

  const { folderName, images } = await getGalleryData(folder);

  return (
    <Layout>
      <h1>{folderName}</h1>
      <GalleryDisplay images={images} />
    </Layout>
  );
}