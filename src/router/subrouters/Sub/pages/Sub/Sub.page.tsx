import React from 'react';
import './Sub.styles.scss';

type SubProps = {};

const Sub: React.FC<SubProps> = (props) => {
  return (
    <div>
      hello from Sub!
      <div>
        <nav>
          <ul>
            <li>
              <a href="/sub/test1">go to test 1</a>
            </li>
            <li>
              <a href="/sub/test2">go to test 2(needs authorization)</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sub;
