import classNames from "classnames";
import { useBoundStore } from "../../stores";

type CellProps = {
  str: string;
  defaultDisplayValue?: string;
  allowZero?: boolean;
  xPositionInGrid?: number;
  yPositionInGrid: number;
};

function Cell({
  str,
  defaultDisplayValue,
  allowZero,
  xPositionInGrid,
  yPositionInGrid,
}: CellProps) {
  const { posX, posY } = useBoundStore((state) => ({
    posX: state.posX,
    posY: state.posY,
  }));

  const isValueOrDefault =
    (defaultDisplayValue && str === "0" && !allowZero) ||
    str === defaultDisplayValue;

  const displayValue = isValueOrDefault ? defaultDisplayValue : str;

  const classes = classNames({
    "text-slate-500": isValueOrDefault,
    "bg-blue-200 text-blue-950 animate-[pulse_1.2s_linear_infinite] font-bold":
      xPositionInGrid !== undefined &&
      xPositionInGrid === posX &&
      yPositionInGrid === posY,
  });

  return <span className={classes}>{displayValue}</span>;
}

export default Cell;
