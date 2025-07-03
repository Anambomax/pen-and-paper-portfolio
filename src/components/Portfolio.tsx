
import React from 'react';

const Portfolio = () => {
  const works = [
    {
      title: "The Digital Nomad's Guide",
      category: "Travel Writing",
      description: "A comprehensive guide exploring the lifestyle of digital nomadism, featuring interviews with successful remote workers and practical tips for location independence.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Non-fiction", "Lifestyle", "Travel"]
    },
    {
      title: "Midnight Reflections",
      category: "Poetry Collection",
      description: "An intimate collection of poems exploring themes of love, loss, and self-discovery through the quiet hours of the night.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Poetry", "Emotion", "Introspection"]
    },
    {
      title: "The Code Whisperer",
      category: "Tech Fiction",
      description: "A thrilling short story about a programmer who discovers that their code has gained consciousness, blending technology with human emotion.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Fiction", "Technology", "Sci-Fi"]
    },
    {
      title: "Content That Converts",
      category: "Business Writing",
      description: "A strategic guide for businesses looking to create compelling content that drives engagement and conversions in the digital age.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Business", "Marketing", "Strategy"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-amber-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Featured Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my most cherished pieces, each telling a unique story and showcasing different facets of my writing journey.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                    {work.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {work.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {work.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="text-amber-600 font-medium hover:text-amber-700 transition-colors duration-300 flex items-center group">
                  Read More
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View All Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
