
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Exploremenu from './components/Exploremenu/Exploremenu';
import FoodDisplay from './components/FoodDisplay/FoodDisplay';
import { food_list } from './assets/assets';  

const ParentComponent = () => {
  const [category, setCategory] = useState('All');  // Manages the selected category

  return (
    <div>
      <Exploremenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} food_list={food_list} />
    </div>
  );
};

export default ParentComponent;
