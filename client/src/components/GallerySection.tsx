import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: '/manus-storage/EDEN_10.jpg_347607f4.jpeg',
      alt: 'Campus Activities',
      category: 'Campus',
    },
    {
      src: '/manus-storage/EDEN_5.jpg_04c80c41.jpeg',
      alt: 'Sports & Recreation',
      category: 'Sports',
    },
    {
      src: '/manus-storage/EDEN.jpg_f87f6cda.jpeg',
      alt: 'Classroom Learning',
      category: 'Academics',
    },
    {
      src: '/manus-storage/EDEN_1.jpg_cf768854.jpeg',
      alt: 'Student Engagement',
      category: 'Students',
    },
    {
      src: '/manus-storage/EDEN_2.jpg_30704005.jpeg',
      alt: 'School Events',
      category: 'Events',
    },
    {
      src: '/manus-storage/EDEN_3.jpg_11bf3ebf.jpeg',
      alt: 'Campus Facilities',
      category: 'Facilities',
    },
    {
      src: '/manus-storage/EDEN_4.jpg_23b0194f.jpeg',
      alt: 'Student Activities',
      category: 'Activities',
    },
    {
      src: '/manus-storage/EDEN_6.jpg_86a6f2f9.jpeg',
      alt: 'Outdoor Learning',
      category: 'Campus',
    },
    {
      src: '/manus-storage/EDEN_7.jpg_1e2b216a.jpeg',
      alt: 'Team Building',
      category: 'Events',
    },
    {
      src: '/manus-storage/EDEN_8.jpg_6ed3d870.jpeg',
      alt: 'Classroom Moments',
      category: 'Academics',
    },
    {
      src: '/manus-storage/EDEN_9.jpg_e7bca16c.jpeg',
      alt: 'School Community',
      category: 'Community',
    },
    {
      src: '/manus-storage/EDEN_11.jpg_cf07b4a8.jpeg',
      alt: 'Student Success',
      category: 'Students',
    },
    {
      src: '/manus-storage/EDEN_12.jpg_8ea53271.jpeg',
      alt: 'Campus Life',
      category: 'Campus',
    },
    {
      src: '/manus-storage/EDEN_13.jpg_43bb5024.jpeg',
      alt: 'Learning Environment',
      category: 'Facilities',
    },
    {
      src: '/manus-storage/EDEN_14.jpg_b2b72dff.jpeg',
      alt: 'Student Achievements',
      category: 'Achievements',
    },
    {
      src: '/manus-storage/EDEN_15.jpg_09e4f697.jpeg',
      alt: 'School Programs',
      category: 'Programs',
    },
    {
      src: '/manus-storage/EDEN_16.jpg_17df2aa1.jpeg',
      alt: 'Extracurricular',
      category: 'Activities',
    },
    {
      src: '/manus-storage/EDEN_17.jpg_f81efd2d.jpeg',
      alt: 'Community Events',
      category: 'Events',
    },
    {
      src: '/manus-storage/EDEN_18.jpg_276b9ec4.jpeg',
      alt: 'Campus Tour',
      category: 'Campus',
    },
    {
      src: '/manus-storage/EDEN_19.jpg (1)_8a9de58c.jpeg',
      alt: 'School Highlights',
      category: 'Highlights',
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
