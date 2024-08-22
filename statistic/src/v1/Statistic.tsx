import { FunctionComponent } from "react";

const Statistic : FunctionComponent = () => {
  return (
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px'
      }}
    >
      <li
        style={{
          display: 'flex',
          padding: '30px',
          width: '200px',
          border: '1px solid black',
          textAlign: 'center',
          flexDirection: 'column',
          fontSize: '24px',
          gap: '5px',
          borderRadius: '10px',
        }}
      >
        <span>Scroll</span>
        <span>12</span>
      </li>
      <li
        style={{
          display: 'flex',
          padding: '30px',
          width: '200px',
          border: '1px solid black',
          textAlign: 'center',
          flexDirection: 'column',
          fontSize: '24px',
          gap: '5px',
          borderRadius: '10px',
        }}    
      >
        <span>Click</span>
        <span>3</span>
      </li>
    </ul>
  )
};

export default Statistic;
