import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: '/Highlights/GRAD(61).jpg',
      alt: 'Graduation Ceremony',
      category: 'Achievements',
    },
    {
      src: '/Highlights/GRAD(41).jpg',
      alt: 'Student Success',
      category: 'Students',
    },
    {
      src: '/Highlights/GRADU_3.jpg',
      alt: 'Academic Excellence',
      category: 'Academics',
    },
    {
      src: '/Highlights/GRAD(45).jpg',
      alt: 'School Events',
      category: 'Events',
    },
    {
      src: '/Highlights/GRADU_5.jpg',
      alt: 'Campus Life',
      category: 'Campus',
    },
    {
      src: '/Highlights/GRAD(40).jpg',
      alt: 'Learning Environment',
      category: 'Facilities',
    },
    {
      src: '/Highlights/GRADU_7.jpg',
      alt: 'Student Activities',
      category: 'Activities',
    },
    {
      src: '/Highlights/GRADU_8.jpg',
      alt: 'Community Events',
      category: 'Community',
    },
    {
      src: '/Highlights/GRADU_9.jpg',
      alt: 'Classroom Moments',
      category: 'Academics',
    },
    {
      src: '/Highlights/GRAD(65).jpg',
      alt: 'Team Building',
      category: 'Events',
    },
    {
      src: '/Highlights/GRADU_11.jpg',
      alt: 'Outdoor Learning',
      category: 'Campus',
    },
    {
      src: '/Highlights/GRADU_12.jpg',
      alt: 'Student Engagement',
      category: 'Students',
    },
    {
      src: '/Highlights/GRADU_13.jpg',
      alt: 'School Programs',
      category: 'Programs',
    },
    {
      src: '/Highlights/GRADU_14.jpg',
      alt: 'Extracurricular',
      category: 'Activities',
    },
    {
      src: '/Highlights/GRAD(74).jpg',
      alt: 'Campus Facilities',
      category: 'Facilities',
    },
    {
      src: '/Highlights/GRAD(76).jpg',
      alt: 'School Community',
      category: 'Community',
    },
    {
      src: '/Highlights/GRADU_16.jpg',
      alt: 'School Community',
      category: 'Community',
    },
  ];

  return (
    <section id="gallery" className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            School Gallery
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Explore the vibrant life and culture of Little Eden School through our photo gallery.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group h-64 sm:h-56"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white font-semibold text-sm">{image.alt}</p>
                  <p className="text-blue-200 text-xs">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
