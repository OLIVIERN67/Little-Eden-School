import { useState } from 'react';
import { X } from 'lucide-react';
import { useT } from '@/i18n/useT';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const t = useT();

  const galleryImages = [
    { src: '/Highlights/GRAD(61).jpg', altKey: 'gallery.img.grad61', categoryKey: 'gallery.cat.achievements' },
    { src: '/Highlights/student%20success.jpg', altKey: 'gallery.img.grad41', categoryKey: 'gallery.cat.students' },
    { src: '/Highlights/academic%20excellence.jpg', altKey: 'gallery.img.gradu3', categoryKey: 'gallery.cat.academics' },
    { src: '/Highlights/GRAD(45).jpg', altKey: 'gallery.img.grad45', categoryKey: 'gallery.cat.events' },
    { src: '/Highlights/GRADU_5.jpg', altKey: 'gallery.img.gradu5', categoryKey: 'gallery.cat.campus' },
    { src: '/Highlights/GRAD(40).jpg', altKey: 'gallery.img.grad40', categoryKey: 'gallery.cat.facilities' },
    { src: '/Highlights/GRADU_7.jpg', altKey: 'gallery.img.gradu7', categoryKey: 'gallery.cat.activities' },
    { src: '/Highlights/GRADU_8.jpg', altKey: 'gallery.img.gradu8', categoryKey: 'gallery.cat.community' },
    { src: '/Highlights/Classroom%20moments.jpeg', altKey: 'gallery.img.gradu9', categoryKey: 'gallery.cat.academics' },
    { src: '/Highlights/team%20building.jpg', altKey: 'gallery.img.grad65', categoryKey: 'gallery.cat.events' },
    { src: '/Highlights/GRADU_11.jpg', altKey: 'gallery.img.gradu11', categoryKey: 'gallery.cat.campus' },
    { src: '/Highlights/GRADU_12.jpg', altKey: 'gallery.img.gradu12', categoryKey: 'gallery.cat.students' },
    { src: '/Highlights/GRADU_13.jpg', altKey: 'gallery.img.gradu13', categoryKey: 'gallery.cat.programs' },
    { src: '/Highlights/GRADU_14.jpg', altKey: 'gallery.img.gradu14', categoryKey: 'gallery.cat.activities' },
    { src: '/Highlights/GRAD(74).jpg', altKey: 'gallery.img.grad74', categoryKey: 'gallery.cat.facilities' },
    { src: '/Highlights/GRAD(76).jpg', altKey: 'gallery.img.grad76', categoryKey: 'gallery.cat.community' },
    { src: '/Highlights/GRADU_16.jpg', altKey: 'gallery.img.gradu16', categoryKey: 'gallery.cat.community' },
  ];

  return (
    <section id="gallery" className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-3 md:mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Gallery Grid - responsive: 1col mobile, 2col sm, 3col md, 4col lg */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group aspect-square"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={t(image.altKey)}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 md:p-3">
                <div>
                  <p className="text-white font-semibold text-[10px] md:text-xs">{t(image.altKey)}</p>
                  <p className="text-blue-200 text-[8px] md:text-[10px]">{t(image.categoryKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-3 md:p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={t('gallery.lightbox.close')}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-8 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label={t('gallery.lightbox.close')}
            >
              <X size={28} />
            </button>
            <img
              src={selectedImage}
              alt={t('gallery.lightbox.image')}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
