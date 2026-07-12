export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="/Highlights/GRADU_3.jpg"
              alt="Little Eden School Classroom"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056D2] mb-4 md:mb-6">
              About Little Eden School
            </h2>

            <div className="space-y-4 md:space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  we facilitate first-class education and character development that empowers students to become responsible global citizens and leaders of tomorrow.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  To provide the most skillful, competitive citizens who are models of servant leadership in their communities and the world.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Our Values</h3>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#F4B400] font-bold mt-1">✓</span>
                    <span><strong>Excellence:</strong> Commitment to the highest standards in all we do</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#F4B400] font-bold mt-1">✓</span>
                    <span><strong>Integrity:</strong> Honesty and moral principles in all actions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#F4B400] font-bold mt-1">✓</span>
                    <span><strong>Community:</strong> Fostering a supportive, inclusive environment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#F4B400] font-bold mt-1">✓</span>
                    <span><strong>Growth:</strong> Continuous learning and development for all</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
