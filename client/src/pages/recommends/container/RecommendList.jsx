// import RecommendItem from "./RecommendItem";

// const RecommendList = (recommends) => {
//   return (
//     <>
//         <ul className={`${recommends?.className} flex gap-5`}>
//           {recommends?.recommends?.map((item) => (
//             <RecommendItem key={item._id} recommend={item} />
//           ))}
//         </ul>
//     </>
//   );
// };
// export default RecommendList;

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getAllCategories } from "../../../services/index/recommendCategories";
import RecommendItem from "./RecommendItem";
import CategoriesTable from "./CategoriesTable";

const RecommendList = ({ recommends, className }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const allCategories = await getAllCategories();
      setCategories(allCategories);
    };
    fetchCategories();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredRecommendations = selectedCategory
    ? recommends.filter((recommend) =>
        recommend.categories.some((category) => category.title === selectedCategory)
      )
    : recommends;
  return (
    <div className="flex container ">
    <div className=" mx-auto p-4">
      <CategoriesTable
        categories={categories?.data}
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
    </div>
    <ul className={`${className} flex gap-5`}>
      {filteredRecommendations?.map((item) => (
        <RecommendItem key={item._id} recommend={item} />
      ))}
    </ul>
    </div>
  );
};
RecommendList.propTypes = {
  recommends: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
    })),
  })).isRequired,
  className: PropTypes.string,
};
export default RecommendList;