import React, { useState, useEffect } from 'react';
import { Success } from '../../../../icons/Success';

import { Icon } from '@ant-design/compatible';


interface Props {
    data: [];
    rowNumber: number;
    total: number;
    k: number;
}
export default function Row(props: Props) {
    const [odd, setOod] = useState([]);
    const [dual, setDual] = useState([]);

    const formatData = (list: any) => {
        let odd=[];
        let dual=[];
        if(list.length <= props.rowNumber){
            odd = list;
        } else if(list.length===props.rowNumber*2) {
            const point= Math.floor(list.length/2);
            odd = list.slice(0,point);
            dual = list.slice(point).reverse();
        } else if(list.length > props.rowNumber && list.length < props.rowNumber*2) {
            odd = list.slice(0,props.rowNumber);
            dual = list.slice(props.rowNumber).reverse();
        } else {
            odd = list.slice(0,props.rowNumber);
            dual = list.slice(props.rowNumber).reverse();
        }
       console.log('odd==>',odd);
       console.log('dual==>',dual);
        setOod(odd);
        setDual(dual); 
    }

    const getPrev = (key:number) => {
        let res = props.k*props.rowNumber*2+key !== props.total-1;
        console.log('oddindex=>',props.k*props.rowNumber*2+key);
        return res;
    }

    const getPrev2 = (key:number) => {
        let res = true;
        if(key===0) {
            if((props.total-1) - (props.k*props.rowNumber*2 + props.rowNumber +1) < props.rowNumber){
                res = false;
            }
        }
        return res;
    }

    const Success = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="100%" height="100%" fill="#46b86f">
                <g fillRule="evenodd">
                    <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z" />
                    <path d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z" fill="#FFF" />
                    <path d="M6.278 7.697L5.045 6.464a.296.296 0 0 0-.42-.002l-.613.614a.298.298 0 0 0 .002.42l1.91 1.909a.5.5 0 0 0
                         .703.005l.265-.265L9.997 6.04a.291.291 0 0 0-.009-.408l-.614-.614a.29.29 0 0 0-.408-.009L6.278 7.697z" />
                </g>
            </svg>
        );
    }
    
    const Fail = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="100%" height="100%" fill="#e67c6a">
                <g fillRule="evenodd">
                    <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z"/>
                    <path d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z" fill="#FFF"/>
                    <path d="M7 5.969L5.599 4.568a.29.29 0 0 0-.413.004l-.614.614a.294.294 0 0 0-.004.413L5.968 7l-1.4 1.401a.29.29 0 0 0
                         .004.413l.614.614c.113.114.3.117.413.004L7 8.032l1.401 1.4a.29.29 0 0 0 .413-.004l.614-.614a.294.294 0 0 0 .004-.413L8.032
                          7l1.4-1.401a.29.29 0 0 0-.004-.413l-.614-.614a.294.294 0 0 0-.413-.004L7 5.968z" />            </g>
            </svg>
        );
    }
    
    const TwoArrow = () => {//黄色的图标>>
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="100%" height="100%" fill="#feb23a">
                <path d="M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14z" />
                <path d="M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12z" fill="#FFF" />
                <path d="M6.415 7.04L4.579 5.203a.295.295 0 0 1 .004-.416l.349-.349a.29.29 0 0 1 .416-.004l2.214 2.214a.289.289 0 0 1
                 .019.021l.132.133c.11.11.108.291 0 .398L5.341 9.573a.282.282 0 0 1-.398 0l-.331-.331a.285.285 0 0 1 0-.399L6.415
                  7.04zm2.54 0L7.119 5.203a.295.295 0 0 1 .004-.416l.349-.349a.29.29 0 0 1 .416-.004l2.214 2.214a.289.289 0 0 1
                   .019.021l.132.133c.11.11.108.291 0 .398L7.881 9.573a.282.282 0 0 1-.398 0l-.331-.331a.285.285 0 0 1 0-.399L8.955 7.04z" />
            </svg>
        );
    }
    const arrowLeft = () => {//->
        return (
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3730" width="30" height="30">
                <path d="M938.5 535.8h-851c-12.8 0-23.3-10.4-23.3-23.3 0-12.8 10.4-23.3 23.3-23.3h851c12.8 0 23.3 10.4 23.3 23.3-0.1 12.8-10.5 23.3-23.3 23.3z" fill="#7D7D7D" p-id="3731"></path>
                <path d="M777.6 718.7c-6 0-11.9-2.3-16.5-6.8-9.1-9.1-9.1-23.8 0-32.9l145.3-145.3c11.7-11.7 11.7-30.7 0-42.3L761.2 346.1c-9.1-9.1-9.1-23.8 0-32.9 9.1-9.1 23.8-9.1 32.9 0l145.3 145.3c29.8 29.8 29.8 78.3 0 108.1L794.1 711.8c-4.6 4.6-10.5 6.9-16.5 6.9z" fill="#7D7D7D" p-id="3732"></path>
            </svg>

        );
    }

    
    useEffect(() => {
        formatData(props.data);
    }, [props.data,props.rowNumber]);

    return (
        <div className="workList-row">
            <div className="workList-row-odd">
            {odd.length>0&&odd.map((item:any,key)=>
                <div className="workList-item odd" key={key}>
                    <div className="status">
                        {Success()}
                    </div>
                    <div className="text">
                        {item.phase}
                    </div>
                {getPrev(key) ?
                 key===(props.rowNumber-1)?<div className="right" ><div className="crc-content"><div className="crc"><div className="arrow"></div></div></div></div>: <div className="anticon-arrow-right">{arrowLeft()}</div>
                :null
                }
                </div>
            )}
            </div>
            <div className="workList-row-dual">
             {dual.length>0&&dual.map((item:any,key)=>
                <div className="workList-item dual" key={key}> 
                <div className="status">
                        {Fail()}
                    </div>
                    <div className="text">
                        {item.phase}
                    </div>
                {getPrev2(key)?
                key===0?<div className="left" ><div className="crc-content"><div className="crc"><div className="arrow"></div></div></div></div>:<div className="anticon-arrow-left">{arrowLeft()}</div>
                :null
                }
                </div>
            )}
            </div>
        </div>
    );
}
