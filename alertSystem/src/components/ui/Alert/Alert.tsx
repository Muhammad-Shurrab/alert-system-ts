// We Use the interfaces for describe props thats is inside the objects

import type { ReactNode } from "react";
import "./index.scss";
import { X } from "lucide-react";
interface IProps {
  type: string;
  icon: ReactNode;
  title: string;
}

// const Alert: FC<IProps> = ({ title }) => {
const Alert = ({ type = "alert-danger", icon, title }: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          <span>{icon}</span>

          <h4>{title}</h4>
        </div>

        <span>
          <X className="close" size={20} />
        </span>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure possimus
        debitis accusantium cum error quod adipisci quasi impedit molestiae sint
        dolor delectus assumenda exercitationem, ullam odio! Officiis a alias
        repudiandae.
      </p>
    </div>
  );
};

export default Alert;
