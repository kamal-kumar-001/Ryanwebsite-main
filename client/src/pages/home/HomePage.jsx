

import MainLayout from "../../components/MainLayout";

import Section from "../../components/Section";
import Newsletter from "../../components/Newsletter";


const HomePage = () => {
  return (
    <MainLayout>
      <Section/>
      <Newsletter/>
      <div style={{height:'200px'}}></div>

    </MainLayout>
  );
};

export default HomePage;
