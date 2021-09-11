import React from "react";

const DeliverySmCard = ({ image, title }) => {
  return (
    <>
      <div className="bg-white rounded-md shadow w-24 md:w-56 lg:hidden">
        <div className="w-full h-24 ">
          <img
            src={image}
            alt="Burger"
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div>
          <h3 className="text-sm font-light text-center py-1">{title}</h3>
        </div>
      </div>
    </>
  );
};

const DeliveryLgCard = ({ image, title }) => {
  return (
    <>
      <div className=" hidden lg:block w-64 h-48">
        <div className="w-full h-full ">
          <img
            src={image}
            alt="Burger"
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div>
          <h3 className="text-xl font-medium py-1">{title}</h3>
        </div>
      </div>
    </>
  );
};

const DeliveryCategory = (props) => {
  return (
    <>
      <DeliverySmCard {...props} />
      <DeliveryLgCard {...props} />
    </>
  );
};

export default DeliveryCategory;
