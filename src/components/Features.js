import React from 'react';

const ShoeFeaturesSection = () => {
  const features = [
    {
      title: 'Comfortable Fit',
      description: 'Experience all-day comfort with our ergonomic design.',
    },
    {
      title: 'Durable Materials',
      description: 'Made with high-quality materials for long-lasting wear.',
    },
    {
      title: 'Stylish Design',
      description: 'Stay on-trend with our modern and eye-catching designs.',
    },
    {
      title: 'Lightweight Construction',
      description: 'Move freely with our lightweight and agile shoes.',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Shoe Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShoeFeaturesSection;
