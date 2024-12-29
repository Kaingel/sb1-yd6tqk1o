import React from 'react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">NCC Luxury</h3>
            <p className="text-gray-400">
              Premium chauffeur services for discerning clients.
            </p>
          </div>
          <div>
            <h4 className="text-xl mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: info@nccluxury.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Luxury Lane, City</p>
            </div>
          </div>
          <div>
            <h4 className="text-xl mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-gold">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-gold">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NCC Luxury. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}