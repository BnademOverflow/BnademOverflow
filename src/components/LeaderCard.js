import React from 'react';
import Card from './Card';

const CustomerCard = ({ customer }) => (
  <Card className="mb-8 shadow-lg">
    <p className="text-xl font-semibold">{customer.customerName}</p>
    <p className="mt-6">{customer.content}</p>
    <div className="flex items-center mt-8">
      <img
        className="w-12 h-12 mr-4 rounded-full"
        src={customer.customerImage}
        alt={customer.customerName}
      />
      <div>
        <p className="text-sm text-gray-600">{customer.customerTitle}</p>
        <a href={"https://twitter.com/"+customer.customerTwitter} target="_blank">
        <p className="text-sm text-gray-600">{customer.customerTwitter}</p>
        </a>
      </div>
    </div>
  </Card>
);

export default CustomerCard;
