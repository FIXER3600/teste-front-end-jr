import * as React from 'react';
import "./style.css";
export interface IRowItemProps {
	name:string;
}

export default function RowItem (props: IRowItemProps) {
  return (
    <div className='row-item'>
      <p id='item-name'>{props.name}</p>
    </div>
  );
}
