import PropTypes from 'prop-types';

const CategoriesTable = ({ categories, onCategorySelect, selectedCategory }) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <button
        className={`border-2 border-gray-700 rounded px-4 py-2 text-gray-700 ${
          selectedCategory === null ? 'bg-gray-700 text-white' : 'bg-white'
        }`}
        onClick={() => onCategorySelect(null)}
      >
        All Recommends
      </button>
      {categories && categories.map((category) => (
        <button
          key={category._id}
          className={`border-2 border-gray-700 rounded px-4 py-2 text-gray-700 ${
            selectedCategory === category.title ? 'bg-gray-700 text-white' : 'bg-white'
          }`}
          onClick={() => onCategorySelect(category.title)}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};

CategoriesTable.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  onCategorySelect: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string, // Now we expect a single selected category
};

export default CategoriesTable;
