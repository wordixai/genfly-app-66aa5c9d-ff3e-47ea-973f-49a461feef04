import { Coffee, Clock, MapPin, Phone, Star } from 'lucide-react';

const Index = () => {
  const menuItems = [
    { name: 'Espresso', price: '$3.50', description: 'Rich and bold single shot' },
    { name: 'Cappuccino', price: '$4.50', description: 'Espresso with steamed milk foam' },
    { name: 'Latte', price: '$4.75', description: 'Smooth espresso with velvety milk' },
    { name: 'Cold Brew', price: '$4.00', description: 'Smooth and refreshing' },
    { name: 'Avocado Toast', price: '$8.50', description: 'Sourdough with fresh avocado' }
  ];

  const reviews = [
    { 
      name: 'Sarah M.',
      rating: 5,
      comment: 'The best coffee in town! The atmosphere is cozy and the staff is super friendly.',
      date: '2 weeks ago'
    },
    { 
      name: 'James L.',
      rating: 4,
      comment: 'Great selection of pastries and the cold brew is excellent. Will definitely come back!',
      date: '1 month ago'
    },
    { 
      name: 'Emma K.',
      rating: 5,
      comment: 'Love their avocado toast and the latte art is always on point. Perfect spot for brunch.',
      date: '3 weeks ago'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f5f2]">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-[url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Brew & Bites</h1>
            <p className="text-xl md:text-2xl mb-8">Artisanal coffee and fresh eats</p>
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium transition">
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">Our Story</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Founded in 2015, Brew & Bites is dedicated to serving the finest locally roasted coffee and fresh,
            seasonal ingredients. Our passion for quality and community shines in every cup and plate.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-amber-900">Our Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
                  <span className="text-amber-700 font-medium">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-amber-900">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{review.comment}"</p>
              <div className="flex justify-between items-center">
                <span className="font-medium text-amber-900">{review.name}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-amber-900">Visit Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-center">
            <MapPin className="text-amber-700 mr-4" size={32} />
            <div>
              <h3 className="text-xl font-semibold mb-1">Location</h3>
              <p className="text-gray-600">123 Coffee Street, Beanville</p>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="text-amber-700 mr-4" size={32} />
            <div>
              <h3 className="text-xl font-semibold mb-1">Hours</h3>
              <p className="text-gray-600">Mon-Fri: 7am - 7pm</p>
              <p className="text-gray-600">Weekends: 8am - 6pm</p>
            </div>
          </div>
          <div className="flex items-center">
            <Phone className="text-amber-700 mr-4" size={32} />
            <div>
              <h3 className="text-xl font-semibold mb-1">Contact</h3>
              <p className="text-gray-600">(555) 123-4567</p>
              <p className="text-gray-600">hello@brewandbites.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;