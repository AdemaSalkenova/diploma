// номер 4 сумки

import Image from 'next/image';

const ProductCard = ({ name, price, secondPrice, imageUrl }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex items-center gap-4">
        
        <div className="w-20 h-20 relative flex-shrink-0">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
              sizes="80px"
            />
          )}
        </div>
        
        
        <div className="flex-grow flex justify-between items-baseline">
          <h3 className="text-lg font-medium">{name}</h3>
          <div className="text-right">
            <p className="text-gray-900 font-medium">${price} CAD</p>
            {secondPrice && (
              <p className="text-gray-500 text-sm">${secondPrice} CAD</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;