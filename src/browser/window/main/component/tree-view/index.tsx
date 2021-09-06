import { observer } from 'mobx-react-lite';
import {
  ReactElement,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { treeStore } from '../../store';
interface Props {
  children?: any;
}
const TreeView = () => {
  return (
    <TreeItem
      data={{
        value: 'a',
        collapse: false,
        children: [
          { value: 'b' },
          {
            value: 'c',
            children: [
              { value: 'd' },
              {
                value: 'e',
                collapse: true,
                children: [{ value: 'f' }, { value: 'g' }],
              },
            ],
          },
        ],
      }}
    />
  );
};

const TreeItem = ({ data }) => {
  const [collapse, setCollapse] = useState(false);
  useLayoutEffect(() => {
    if (data.children && data.collapse) {
      console.log(data.collapse);
      setCollapse(data.collapse);
    }
    console.log('exe');
  }, []);
  if (data.children) {
    return (
      <ul style={{ listStyleType: 'none' }}>
        <p
          onClick={() => {
            // setCollapse(!collapse);
            data.collapse = !data.collapse;
            setCollapse(data.collapse);
          }}
        >
          {collapse ? <em>👉</em> : <em>👇</em>} {data.value}
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
