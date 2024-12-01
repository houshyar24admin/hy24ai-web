import React from 'react';
import { Bot, Building2, Cpu, Users, Boxes, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Agent Builder",
      description: "Create custom AI agents tailored to your specific needs"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Enterprise CRM",
      description: "Integrated CRM system powered by artificial intelligence"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Integration",
      description: "Seamless connection to leading AI platforms"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration Tools",
      description: "Team-focused features for better productivity"
    },
    {
      icon: <Boxes className="w-8 h-8" />,
      title: "Scalable Solutions",
      description: "Grow your AI capabilities as your needs evolve"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Top-tier security for your AI operations"
    }
  ];

  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Your AI Journey
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to leverage AI technology effectively
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-purple-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;