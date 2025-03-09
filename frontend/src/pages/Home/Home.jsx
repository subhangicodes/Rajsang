// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Home.css'
import { useState } from 'react'
import Hearder from '../../components/hearder/Hearder'
import Exploremenu from '../../components/ExploreMenu/Exploremenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
function Home() {
    const [category,setCategory]=useState("All")
    return (
        <div>
          <Hearder/>
          <Exploremenu category={category} setCategory={setCategory}/>
          <FoodDisplay category={category} />
          <AppDownload/>
        </div>
    )
}

export default Home
