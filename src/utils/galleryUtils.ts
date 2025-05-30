import { promises as fs } from 'fs';
import path from 'path';

const mediaDir = path.join(process.cwd(), 'public', 'media');

export const getGalleryFolders = async (): Promise<string[]> => {
  try {
    const folders = await fs.readdir(mediaDir);
    return folders.filter(folder => {
      const folderPath = path.join(mediaDir, folder);
      return fs.stat(folderPath).then(stat => stat.isDirectory());
    });
  } catch (error) {
    console.error('Error reading media directory:', error);
    return [];
  }
};

export const getGalleryImagePaths = async (folderName: string): Promise<string[]> => {
  const folderPath = path.join(mediaDir, folderName);
  try {
    const files = await fs.readdir(folderPath);
    return files
      .filter((file) => /\.(jpe?g|png|gif)$/i.test(file))
      .map((file) => `/media/${folderName}/${file}`);
  } catch (error) {
    console.error(`Error reading directory ${folderPath}:`, error);
    return [];
  }
};
