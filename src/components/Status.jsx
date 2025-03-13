// components/Status.jsx
import "react";
import PropTypes from "prop-types";

const Status = ({ status }) => {
  return (
    <div className="status">
      <h3>Status: {status}</h3>
    </div>
  );
};

// Add PropTypes for validation
Status.propTypes = {
  status: PropTypes.string.isRequired, // Assuming status is a string
};

export default Status;
