
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
const NavItem = ({
  link,
  title,
  icon,
  name,
  activeNavName,
  setActiveNavName,
}) => {
  return (
    <NavLink
      to={link}
      className={`${
        name === activeNavName
          ? "font-bold text-primary"
          : "font-semibold text-[#A5A5A5]"
      } flex items-center gap-x-2 py-2 text-lg`}
      onClick={() => setActiveNavName(name)}
    >
      {icon}
      {title}
    </NavLink>
  );
};
NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  name: PropTypes.string.isRequired,
  activeNavName: PropTypes.string.isRequired,
  setActiveNavName: PropTypes.func.isRequired,
};
export default NavItem;
