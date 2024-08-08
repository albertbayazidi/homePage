import React from 'react';

export function UnorderedList({ Items = [] }) {
  return (
    <ul className="list-disc list-inside">
      {Items.map((item, index) => (
        <li className={index === 0 ? 'pb-4' : ''} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Unordered2List({ Items = [] }) {
  return (
    <ul className="list-disc list-inside">
      {Items.map((subItem, index) => (
        <li className={index === 0 ? 'pb-4' : ''} key={index}>
          {subItem.tittel}
          <ul className="list-disc list-inside pl-5">
            {subItem.oppgaveTekst.map((task, taskIndex) => (
              <li key={taskIndex} className="pb-1">
                {task}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
