import React from 'react';

import WorkList from './components/WorkList';

import './index.scss';


export default function Home() {
    return (
       <div className="my-homewok">
           <div className="content-left">some content</div>
           <div className="content-right">
                <WorkList rowNumber={5}/>
           </div>
       </div>
    );
}
