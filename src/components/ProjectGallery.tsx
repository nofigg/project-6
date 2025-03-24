import React, { useState } from 'react';
import Image from 'next/image';

interface ProjectImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const mockImages: ProjectImage[] = [
  {
    id: 1,
    src: 'https://source.unsplash.com/random/600x400/?technology',
    alt: 'Project 1',
    width: 600,
    height: 400,
  },
  {
    id: 2,
    src: 'https://source.unsplash.com/random/600x400/?web',
    alt: 'Project 2',
    width: 600,
    height: 400,
  },
  {
    id: 3,
    src: 'https://source.unsplash.com/random/600x400/?design',
    alt: 'Project 3',
    width: 600,
    height: 400,
  },
  {
    id: 4,
    src: 'https://source.unsplash.com/random/600x400/?code',
    alt: 'Project 4',
    width: 600,
    height: 400,
  },
  {
    id: 5,
    src: 'https://source.unsplash.com/random/600x400/?development',
    alt: 'Project 5',
    width: 600,
    height: 400,
  },
  {
    id: 6,
    src: 'https://source.unsplash.com/random/600x400/?ui',
    alt: 'Project 6',
    width: 600,
    height: 400,
  },
];

function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

  const handleImageClick = (image: ProjectImage) => {
    setSelectedImage(image);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockImages.map((image) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl mx-auto">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectGallery;
