import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

function Legend(props) {
  const { color, label } = props;

  return (
    <div className="flex items-center justify-start gap-2">
      <div className={`w-4 h-4 ${css({ background: color })}`} />
      <p>{label}</p>
    </div>
  );
}

Legend.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
};

export default Legend;
