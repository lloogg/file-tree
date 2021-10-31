import { observer } from 'mobx-react-lite';
import {
  ReactElement,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import fs from 'fs';

const data = ['b', 'c', 'c', 'd', 'e'];
const TreeView = () => {
  return <TreeItem value="a" />;
};

const TreeItem = ({ value }: { value: string }) => {
  // let dataSize = useRef(Math.floor(Math.random() * 2));
  // let data = useRef([]);
  let isFolder = useRef<boolean>(Math.random() < 0.5);
  let isOpen = useRef<boolean>(false);

  // for (let i = 0; i < dataSize.current; i++) {
  //   data.current.push('randomString');
  // }

  // 渲染之前，判断是文件还是文件夹，通过 fs.statSync
  // 这个 stat 根据实际情况，可以用 ref 存储起来
  // let stat = fs.statSync()
  const [children, setChildren] = useState([]);
  const ul = useRef<HTMLUListElement>(null);
  // useEffect(() => {
  //   if (ul.current) {
  //     ul.current.addEventListener(
  //       'click',
  //       () => {
  //         // if (data.current.length !== 0) {
  //         //   setChildren(data.current);
  //         // }
  //       },
  //       { once: true },
  //     );
  //   }
  // }, []);
  if (isFolder.current) {
    return (
      <ul
        ref={ul}
        onClick={() => {
          // setChildren(data.current);
          console.log('clicked');
          console.log(isOpen);
          if (isOpen.current) {
            setChildren([]);
            isOpen.current = false;
          } else {
            let dataSize = Math.floor(Math.random() * 4);
            let data = [];
            for (let i = 0; i < dataSize; i++) {
              data.push('randomString');
            }
            console.log(data);
            setChildren(data);
            isOpen.current = true;
          }
        }}
      >
        folder
        {children &&
          children.map((child, i) => {
            return (
              <li key={i}>
                <TreeItem value={child} />
              </li>
            );
          })}
      </ul>
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
