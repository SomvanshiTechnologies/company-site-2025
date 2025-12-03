import React, { useState } from "react";
import SolutionCategories from "./SolutionCategories";
import AISolutionsIntro from "./AISolutionsIntro";
import ServicesGrid from "./ServicesGrid";

const TabsRender = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <SolutionCategories activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 0 && <AISolutionsIntro />}
      {activeTab === 1 && <ServicesGrid />}
      {activeTab === 2 && <p>RPA PAGE HERE</p>}
      {activeTab === 3 && <p>AI TRANSFORMATION PAGE HERE</p>}
      {activeTab === 4 && <p>CLOUD SOLUTIONS PAGE HERE</p>}
    </>
  );
};

export default TabsRender;
