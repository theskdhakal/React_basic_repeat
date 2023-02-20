// export const Display = ({ submit }) => {

//   return (<div>{submit}</div>);
// };

import { useState, useEffect } from "react";

export const Display = ({ submit }) => {
  const [previousSubmits, setPreviousSubmits] = useState([]);

  useEffect(() => {
    if (submit !== "") {
      setPreviousSubmits((prev) => [...prev, submit]);
    }
  }, [submit]);

  return (
    <div>
      {previousSubmits.map((submit, index) => (
        <p>{submit}</p>
      ))}
    </div>
  );
};
