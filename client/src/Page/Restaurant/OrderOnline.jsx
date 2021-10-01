import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// Component
import FloatMenubtn from "../../Components/Restaurant/Order-Online/FloatMenubtn";
import FoodItem from "../../Components/Restaurant/Order-Online/FoodItem";
import FoodList from "../../Components/Restaurant/Order-Online/FoodList";
import MenuListContainer from "../../Components/Restaurant/Order-Online/MenuListContainer";

const OrderOnline = () => {
  return (
    <>
      <div className="w-full h-screen  flex">
        <aside className="hidden md:block w-1/5 border-r h-screen sticky top-0">
          <MenuListContainer />
        </aside>

        <div className="w-full md:w-4/5 md:pl-6">
          <h2 className="text-2xl font-semibold">Order Online</h2>

          <div className="flex items-center gap-6 text-gray-400 font-light">
            <h4 className="my-4 flex items-center gap-1 border-r border-gray-400 pr-4">
              <AiOutlineCompass />
              Live track your order
            </h4>
            <h4 className="flex items-center gap-1">
              <BiTimeFive />
              40 min
            </h4>
          </div>

          <section className="flex flex-col gap-3 md:gap-10 h-screen overflow-y-scroll">
            <FoodList
              title="Recommended"
              items={[
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/79a/18fd5dde339078ab4b6f846a08c2779a.jpg",
                  title:
                    "2 Chicken Whopper + 1 King Fries + 1 Chicken fries + 2 Pepsi Can",
                  rating: "3",
                  votes: "278",
                  price: "300",
                  description:
                    "Two much mutton as delicious flame-grilled patties, farm-fresh veggies and mayo is what",
                },
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/79a/18fd5dde339078ab4b6f846a08c2779a.jpg",
                  title:
                    "2 Chicken Whopper + 1 King Fries + 1 Chicken fries + 2 Pepsi Can",
                  rating: "3",
                  votes: "278",
                  price: "300",
                  description:
                    "Two much mutton as delicious flame-grilled patties, farm-fresh veggies and mayo is what",
                },
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/79a/18fd5dde339078ab4b6f846a08c2779a.jpg",
                  title:
                    "2 Chicken Whopper + 1 King Fries + 1 Chicken fries + 2 Pepsi Can",
                  rating: "3",
                  votes: "278",
                  price: "300",
                  description:
                    "Two much mutton as delicious flame-grilled patties, farm-fresh veggies and mayo is what",
                },
              ]}
            />

            <FoodList
              title="Whopper Friday (30% OFF)"
              items={[
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/79a/18fd5dde339078ab4b6f846a08c2779a.jpg",
                  title:
                    "2 Chicken Whopper + 1 King Fries + 1 Chicken fries + 2 Pepsi Can",
                  rating: "3",
                  votes: "278",
                  price: "300",
                  description:
                    "Two much mutton as delicious flame-grilled patties, farm-fresh veggies and mayo is what",
                },
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/79a/18fd5dde339078ab4b6f846a08c2779a.jpg",
                  title:
                    "2 Chicken Whopper + 1 King Fries + 1 Chicken fries + 2 Pepsi Can",
                  rating: "3",
                  votes: "278",
                  price: "300",
                  description:
                    "Two much mutton as delicious flame-grilled patties, farm-fresh veggies and mayo is what",
                },
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/79a/18fd5dde339078ab4b6f846a08c2779a.jpg",
                  title:
                    "2 Chicken Whopper + 1 King Fries + 1 Chicken fries + 2 Pepsi Can",
                  rating: "3",
                  votes: "278",
                  price: "300",
                  description:
                    "Two much mutton as delicious flame-grilled patties, farm-fresh veggies and mayo is what",
                },
              ]}
            />
          </section>
        </div>
      </div>
      <FloatMenubtn />
    </>
  );
};

export default OrderOnline;
