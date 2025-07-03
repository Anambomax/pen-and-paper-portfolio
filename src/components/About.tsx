
import React from 'react';
import { Book, FileText } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-6 bg-white/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">About My Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">The Writer Behind the Words</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              For over a decade, I've been passionate about the power of storytelling. My journey began with late-night scribbles in worn notebooks and has evolved into a dedicated craft of creating compelling narratives that resonate with readers across diverse backgrounds.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Whether it's crafting engaging blog posts, developing character-driven short stories, or creating content that connects brands with their audiences, I believe every piece of writing has the potential to make a meaningful impact.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Creative Writing</span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Content Strategy</span>
              <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Copywriting</span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Editorial</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                <Book className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">50+ Stories</h4>
              <p className="text-gray-600 text-sm">Published across various platforms and publications</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">10+ Years</h4>
              <p className="text-gray-600 text-sm">Of dedicated writing and storytelling experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
