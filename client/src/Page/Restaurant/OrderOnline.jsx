import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// Component
import FloatMenubtn from "../../Components/Restaurant/Order-Online/FloatMenubtn";
import FoodList from "../../Components/Restaurant/Order-Online/FoodList";
import MenuListContainer from "../../Components/Restaurant/Order-Online/MenuListContainer";

// Redux
import { getFoodlist } from "../../Redux/Reducer/food/food.action";

const OrderOnline = () => {
  const [menu, setMenu] = useState([]);

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
  );

  const dispatch = useDispatch();

  useEffect(() => {
    reduxState &&
      dispatch(getFoodlist(reduxState?.menu)).then((data) =>
        setMenu(data?.payload?.menus?.menus)
      );
  }, [reduxState]);

  return (
    <>
      <div className="w-full h-screen flex">
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

          <section className="flex flex-col gap-3 md:gap-10 h-screen md:overflow-y-scroll">
            {menu.map((item) => (
              <FoodList key={item._id} {...item} />
            ))}
          </section>
        </div>
      </div>
      <FloatMenubtn />
    </>
  );
};

export default OrderOnline;
