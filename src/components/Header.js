import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title, onAdd, showAddTask }) {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color="green"
          text={showAddTask ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
}

Header.defaultProps = {
  title: "Title",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
