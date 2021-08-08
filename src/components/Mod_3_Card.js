import React from 'react';
import Card from './Card';

const Mod_3_Card = ({ mod_3 }) => (
  <Card className="mb-8 shadow-lg">
    <p className="text-xl font-semibold">{mod_3.mod_3_Name}</p>
    <p className="mt-6">{mod_3.content}</p>
    <div className="flex items-center mt-8">
      <img className="w-12 h-12 mr-4 rounded-full" src={mod_3.mod_3_Image} alt={mod_3.mod_3_Name} />
      <div>
        <p className="text-sm text-gray-600">{mod_3.mod_3_Title}</p>
        <a href={'https://twitter.com/' + mod_3.mod_3_Twitter} target="_blank">
          <p className="text-sm text-gray-600">{mod_3.mod_3_Twitter}</p>
        </a>
      </div>
    </div>
  </Card>
);

export default Mod_3_Card;
