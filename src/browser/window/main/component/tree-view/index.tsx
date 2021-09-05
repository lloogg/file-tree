import { observer } from 'mobx-react-lite';
import { ReactElement, ReactNode } from 'react';
import { treeStore } from '../../store';
interface Props {
  children?: any;
}
const TreeView = () => {
  function renderTree(data): any {
    if (data instanceof Array) {
      return data.map((value, index) => {
        if (value instanceof Array) {
          return (
            <li key={index}>
              <ul style={{ listStyleType: 'none' }}>{renderTree(value)}</ul>
            </li>
          );
        } else {
          return <li>{renderTree(value)}</li>;
        }
      });
    } else {
      return <>{data}</>;
    }
  }
  return (
    <ul style={{ listStyleType: 'none' }}>
      {renderTree([1, 2, [3, 4], [5, 6, [7, 8]]])}
    </ul>
  );
};

export default TreeView;
