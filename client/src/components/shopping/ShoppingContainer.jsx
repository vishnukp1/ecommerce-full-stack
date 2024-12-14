
import { items } from "../../data/CartItems";
import ShoppingItems from "./ShoppingItems";

const ShoppingContainer = () => {
  return (
    <div className="section grid lg:grid-cols-4 ml-16 md:grid-cols-2 gap-2 ">
      {items.map((item) => {
        return <ShoppingItems key={item.id} />;
      })}
    </div>
  );
};

export default ShoppingContainer;
