import { observer } from 'mobx-react-lite';
import { ReactElement, ReactNode, useState } from 'react';
import { treeStore } from '../../store';
interface Props {
  children?: any;
}
const TreeView = () => {
  return (
    <TreeItem
      data={{
        value: 'a',
        children: [
          { value: 'b' },
          {
            value: 'c',
            children: [
              { value: 'd' },
              { value: 'e', children: [{ value: 'f' }, { value: 'g' }] },
            ],
          },
        ],
      }}
    />
  );
};

const TreeItem = ({ data }) => {
  const [collapse, setCollapse] = useState(true);
  if (data.children) {
    return (
      <ul style={{ listStyleType: 'none' }}>
        <p
          onClick={() => {
            setCollapse(!collapse);
          }}
        >
          {data.value}
        </p>
        {!collapse &&
          data.children.map((item, index) => {
            return (
              <li key={index}>
                <TreeItem data={item} />
              </li>
            );
          })}
      </ul>
    );
  } else {
    return (
      <ul style={{ listStyleType: 'none' }}>
        <p>{data.value}</p>
      </ul>
    );
  }
};

export default TreeView;
