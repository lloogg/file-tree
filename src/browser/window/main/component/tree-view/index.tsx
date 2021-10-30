import { observer } from 'mobx-react-lite';
import {
  ReactElement,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { treeStore } from '../../store';

const data = ['b', 'c', 'c', 'd', 'e'];
const TreeView = () => {
  return (
    // <TreeItem
    //   data={{
    //     value: 'a',
    //     collapse: false,
    //     children: [
    //       { value: 'b' },
    //       {
    //         value: 'c',
    //         children: [
    //           { value: 'd' },
    //           {
    //             value: 'e',
    //             collapse: true,
    //             children: [{ value: 'f' }, { value: 'g' }],
    //           },
    //         ],
    //       },
    //     ],
    //   }}
    // />
    <TreeItem value="a" />
  );
};

const TreeItem = ({ value }: { value: string }) => {
  // let dataSize = useRef(Math.floor(Math.random() * 5));
  let dataSize = useRef(Math.floor(Math.random() * 2));
  let data = useRef([]);
  for (let i = 0; i < dataSize.current; i++) {
    data.current.push('randomString');
  }
  const [children, setChildren] = useState([]);
  const ul = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (ul.current) {
      ul.current.addEventListener(
        'click',
        () => {
          if (data.current.length !== 0) {
            setChildren(data.current);
          }
        },
        { once: true },
      );
    }
  }, []);
  if (data.current.length !== 0) {
    return (
      <>
        <ul
          ref={ul}
          onClick={() => {
            setChildren(data.current);
          }}
        >
          folder
          {children &&
            children.map((child) => {
              return (
                <li>
                  <TreeItem value={child} />
                </li>
              );
            })}
        </ul>
      </>
    );
  } else {
    return <>file</>;
  }
};

// const TreeItem = ({ data }) => {
//   const [collapse, setCollapse] = useState(false);
//   useLayoutEffect(() => {
//     if (data.children && data.collapse) {
//       console.log(data.collapse);
//       setCollapse(data.collapse);
//     }
//     console.log('exe');
//   }, []);
//   if (data.children) {
//     return (
//       <ul style={{ listStyleType: 'none' }}>
//         <p
//           onClick={() => {
//             // setCollapse(!collapse);
//             data.collapse = !data.collapse;
//             setCollapse(data.collapse);
//           }}
//         >
//           {collapse ? <em>👉</em> : <em>👇</em>} {data.value}
//         </p>
//         {!collapse &&
//           data.children.map((item, index) => {
//             return (
//               <li key={index}>
//                 <TreeItem data={item} />
//               </li>
//             );
//           })}
//       </ul>
//     );
//   } else {
//     return (
//       <ul style={{ listStyleType: 'none' }}>
//         <p>{data.value}</p>
//       </ul>
//     );
//   }
// };

export default TreeView;
