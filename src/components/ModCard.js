import React from 'react';
import Card from './Card';

const ModCard = ({ mod }) => (
  <Card className="mb-8 shadow-2xl">
    <p className="text-xl font-semibold">{mod.modName}</p>
    <p className="mt-6">{mod.content}</p>
    <div className="flex items-center mt-8">
      <img
        className="w-12 h-12 mr-4 rounded-full"
        src={mod.modImage}
        alt={mod.modName}
      />
      <div>
        <p className="text-sm text-gray-600">{mod.modTitle}</p>
        
        <p className="text-sm text-gray-600">{mod.modTwitter}</p>
      </div>
    </div>
  </Card>
);

export default ModCard;
