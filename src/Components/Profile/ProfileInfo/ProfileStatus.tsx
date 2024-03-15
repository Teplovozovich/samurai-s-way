import React, { useEffect, useState, ChangeEvent } from "react";
import styles from "./ProfileInfo.module.scss";

type PropsType = {
  status: string;
  updateStatus: (status: string) => void;
};

const ProfileStatus: React.FC<PropsType> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={styles.profile_status}>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {" "}
            {props.status || "------"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            onBlur={deActivateEditMode}
            autoFocus={true}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
