
import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Create Something Amazing</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your story to life? Whether you need compelling content, creative writing, or editorial services, I'm here to help transform your ideas into powerful narratives.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2 text-amber-400">Email</h3>
            <p className="text-gray-300">hello@yourname.com</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2 text-amber-400">Response Time</h3>
            <p className="text-gray-300">Within 24 hours</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2 text-amber-400">Availability</h3>
            <p className="text-gray-300">Open for projects</p>
          </div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 max-w-2xl mx-auto">
          <h3 className="text-2xl font-serif font-semibold mb-6">Send Me a Message</h3>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="What would you like to discuss?"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
              <textarea 
                rows={6}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
