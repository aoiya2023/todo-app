import './Footer.css';
import Tab from './Tab.js';
import { useState } from 'react';
import Stack from '@mui/material/Stack';

export function Content(props) {
    const [activeTab, setActiveTab] = useState(props.children[0].key);

    return (
      <div>
        <Stack direction="row">
          {props.children.map(child =>
            <Tab key={child.key}
                 label={child.key}
                 activeTab={activeTab}
                 onClickTab={(label) => setActiveTab(label)}/>)}
        </Stack>
        {props.children.map(child => activeTab === child.key && child)}
      </div>
      
    );
}
  
export default Content;