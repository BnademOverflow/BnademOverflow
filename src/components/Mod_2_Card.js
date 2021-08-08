import React from 'react';
import Card from './Card';

const Mod_2_Card = ({ mod_2 }) => (
  <Card className="mb-8 shadow-lg">
    <p className="text-xl font-semibold">{mod_2.mod_2_Name}</p>
    <p className="mt-6">{mod_2.content}</p>
    <div className="flex items-center mt-8">
      <img className="w-12 h-12 mr-4 rounded-full" src={mod_2.mod_2_Image} alt={mod_2.mod_2_Name} />
      <div>
        <p className="text-sm text-gray-600">{mod_2.mod_2_Title}</p>
        <a href={'https://twitter.com/' + mod_2.mod_2_Twitter} target="_blank">
          <p className="text-sm text-gray-600">{mod_2.mod_2_Twitter}</p>
        </a>
      </div>
    </div>
  </Card>
);

export default Mod_2_Card;
