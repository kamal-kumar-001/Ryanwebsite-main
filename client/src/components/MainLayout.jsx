import PropTypes from "prop-types";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="h-24">

      </div>
      {children}
      <Footer />
    </div>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};
export default MainLayout;
