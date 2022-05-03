import React, { useState } from "react";
import { Button } from "../../../common/button/button";

export const TopButton = (props: { disabled: boolean }) => {
  const [state, setState] = useState("Redux Test");
  return (
    <Button
      className={"top_button"}
      disabled={props.disabled ? true : false}
      onClick={() => setState("押しました")}
    >
      {state}
    </Button>
  );
};
