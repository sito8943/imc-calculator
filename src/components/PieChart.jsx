import { useState } from "react";
import PropTypes from "prop-types";
import { PieChart } from "react-minimal-pie-chart";

export function LPieChart(props) {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  const data = props.data.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: "grey",
      };
    }
    return entry;
  });

  return (
    <div>
      <PieChart
        data={data}
        lineWidth={20}
        radius={50 - 6}
        segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
        segmentsShift={(index) => (index === selected ? 6 : 1)}
        animate
        label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
        labelPosition={60}
        paddingAngle={18}
        rounded={true}
        labelStyle={{
          fill: "#FFF",
          opacity: 0.75,
          pointerEvents: "none",
          fontSize: "7px",
        }}
        onClick={(_, index) => {
          setSelected(index === selected ? undefined : index);
        }}
        onMouseOver={(_, index) => {
          setHovered(index);
        }}
        onMouseOut={() => {
          setHovered(undefined);
        }}
      />
    </div>
  );
}

LPieChart.propTypes = {
  data: PropTypes.array,
};

export default LPieChart;
