import React, { useState, useEffect } from "react";

const UnmountTest = () => {
  // Unmount 시점에 실행하게 됨
  useEffect(() => {
    console.log("Mount!");
    return () => {
      console.log("Unmount!");
    };
  }, []);

  return <div>Unmount Testing Component</div>;
};

// Mount 되는 시점에 실행
// useEffect(() => {
//   console.log("Mount!");
// }, []);

// 컴포넌트가 리렌더(업데이트) 되는 시점에 실행
// useEffect(() => {
//   console.log("Mount!");
//   return () => {
//     console.log("Unmount!");
//   };
// });

// count status가 변화하는 순간 실행
// useEffect(() => {
//   console.log("Mount!");
//   return () => {
//     console.log("Unmount!");
//   };
// }, [count]);

// Unmount 되는 시점에 실행
// useEffect(() => {
//  return () => {
//    console.log("Unmount!");
//  };
// }, []);

const LifeCycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default LifeCycle;
