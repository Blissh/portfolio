import "../styles/waves.css";
import "../helpers/animate";
import "../helpers/svgResize";
import { Waves1, Waves2, Waves3, Waves4, Waves5 } from "./waves/";

export const Waves = () => {
  return (
    <div className="waves-container">
      <Waves1/>
      <Waves2/>
      <Waves3/>
      <Waves4/>
      <Waves5/>
    </div>
  );
};
