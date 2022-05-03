import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../redux/root.reducer";

export const Top = () => {

  // selector Storeの中身参照→ 持ってくる
  const str = useSelector((state: State) => state.management.setting);

  return (
    <div className={'top'}>
      testdes
    </div>
  );
};
