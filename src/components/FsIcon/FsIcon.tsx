import { type FC } from "react";

interface IIconProps {
  name: string;
  size: number;
}

const FsIcon: FC<IIconProps> = (props: IIconProps) => (
  <svg
    aria-hidden="true"
    style={{
      width: `${props.size}px`,
      height: `${props.size}px`,
      color: "#555",
    }}
  >
    <use href={`#icon-${props.name}`}></use>
  </svg>
);

export default FsIcon;
