import "./index.css";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Counter = ({ increase, decrease, page }) => {
  return (
    <div className="counter">
      {" "}
      <i className="decrease" onClick={decrease}>
        <GrFormPrevious size={16} />
      </i>
      <p className="page">
        PAGE: <b>{page}</b>
      </p>
      <i className="increase" onClick={increase}>
        {" "}
        <MdNavigateNext size={16} />
      </i>
    </div>
  );
};

export default Counter;
