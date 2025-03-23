import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, content }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <div className="mr-4 text-2xl text-gray-500">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default InfoCard;