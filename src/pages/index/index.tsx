import React from 'react';

import WorkList from './components/WorkList';

import './index.scss';


export default function Home() {
    return (
       <div className="my-homewok">
           <div className="content-left">some content</div>
           <div className="content-right" id="j_content">
                <WorkList rowNumber={4} outResize={true}/>
           </div>
       </div>
    );
}
