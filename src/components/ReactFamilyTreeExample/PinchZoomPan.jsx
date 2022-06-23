import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { create } from "pinch-zoom-pan";
import css from "./PinchZoomPan.module.css";

const PinchZoomPan = ({
  min,
  max,
  captureWheel,
  className,
  style,
  children,
}) => {
  const root = useRef(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    return create({ element, minZoom: min, maxZoom: max, captureWheel });
  }, [min, max, captureWheel]);

  return (
    <div ref={root} className={classNames(className, css.root)} style={style}>
      <div className={css.point}>
        <div className={css.canvas}>{children}</div>
      </div>
    </div>
  );
};

PinchZoomPan.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  captureWheel: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.element.isRequired,
};

export default PinchZoomPan;
