import { Bell, Database, Shield, Clock } from 'lucide-react';

const features = [
  { icon: Bell, title: 'Temperature alerts' },
  { icon: Database, title: 'Power failure detection' },
  { icon: Shield, title: 'Security monitoring' },
  { icon: Clock, title: 'Real-time check-ins' },
];

const FeaturesSection = () => (
  <section className="w-full py-4 px-2">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:flex md:justify-between py-4 px-2">
        {features.map(({ icon: Icon, title }, index) => (
          <div
            key={index}
            className={`
              flex items-center justify-center gap-[15px]
              text-left
              ${index % 2 === 0 ? 'border-r-2 border-[#80808040]' : ''}
              md:w-1/4 md:text-center md:border-r-2 md:border-[#80808040]
              ${index === features.length - 1 ? 'md:border-none' : ''}
            `}
          >
            <div className="rounded-full flex items-center justify-center">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm text-gray-900 font-medium w-[40%] text-left">
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
