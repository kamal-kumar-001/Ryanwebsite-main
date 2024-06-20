import MainLayout from "../../components/MainLayout";
import Section from "../../components/Section";
import Newsletter from "../../components/Newsletter";
import BMI from "../../components/bmi/Bmi";


const HomePage = () => {
  return (
    <MainLayout>
      <Section/>
      <Newsletter/>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <BMI/>
      </div>
    
      <div style={{height:'200px'}}></div>

    </MainLayout>
  );
};

export default HomePage;
