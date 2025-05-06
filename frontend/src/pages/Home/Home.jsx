/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// // eslint-disable-next-line no-unused-vars
// import React from 'react'
// import './Home.css'
// import { useState } from 'react'
// import Hearder from '../../components/hearder/Hearder'
// import Exploremenu from '../../components/ExploreMenu/Exploremenu';
// import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
// import AppDownload from '../../components/AppDownload/AppDownload';
// function Home() {
//     const [category,setCategory]=useState("All")
//     return (
//         <div>
//           <Hearder/>
//           <Exploremenu category={category} setCategory={setCategory}/>
//           <FoodDisplay category={category} />
//           <AppDownload/>
//         </div>
//     )
// }

// export default Home

// Home.jsx
import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/hearder/Hearder'; // Ensure the path is correct
import ExploreMenu from '../../components/ExploreMenu/Exploremenu'; // Ensure the path is correct
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'; // Ensure the path is correct
import AppDownload from '../../components/AppDownload/AppDownload'; // Ensure the path is correct

const Home = ({ setCategory }) => {
  const [category, setLocalCategory] = useState("All");

  const handleCategoryChange = (newCategory) => {
    setLocalCategory(newCategory);
    setCategory(newCategory); // Update the category in the App component
  };

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={handleCategoryChange} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
