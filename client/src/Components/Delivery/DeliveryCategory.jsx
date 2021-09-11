import React from "react";

const DeliverySmCard = () => {
  return (
    <>
      <div className="bg-white rounded-md shadow md:w-56 lg:hidden">
        <div className="w-full h-24 ">
          <img
            src="https://b.zmtcdn.com/data/homepage_dish_data/4/6e69685d22c94ffd42ccd7e70e246bd9.png"
            alt="Burger"
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div>
          <h3 className="text-sm font-light text-center py-1">Burger</h3>
        </div>
      </div>
    </>
  );
};

const DeliveryCategory = () => {
  return (
    <>
      <DeliverySmCard />
    </>
  );
};

export default DeliveryCategory;
