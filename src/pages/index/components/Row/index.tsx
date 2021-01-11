import React, { useState, useEffect } from 'react';

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
       
        setOod(odd);
        setDual(dual); 
    }

    const getPrev = (key:number) => {
        let res = props.k*props.rowNumber*2+key !== props.total-1;
        console.log('index=>',props.k*props.rowNumber*2+key);
        return res;
    }

    const getPrev2 = (key:number) => {
        let res = true;
        if(key===0) {
            if((props.total-1) - (props.k*props.rowNumber*2 + props.rowNumber +1) < 5){
                res = false;
            }
        }
        return res;
    }
    
    useEffect(() => {
        formatData(props.data);
    }, []);

    return (
        <div className="workList-row">
            <div className="workList-row-odd">
            {odd.length>0&&odd.map((item:any,key)=>
                <div className="workList-item odd" key={key}> {item.phase}-{item.order}
                {getPrev(key) ?
                 key===(props.rowNumber-1)?<Icon type="right"/>: <Icon type="arrow-right" />
                :null
                }
                </div>
            )}
            </div>
            <div className="workList-row-dual">
             {dual.length>0&&dual.map((item:any,key)=>
                <div className="workList-item dual" key={key}> {item.phase}-{item.order}
                {getPrev2(key)?
                key===0?<Icon type="left"/>:<Icon type="arrow-left" />
                :null
                }
                </div>
            )}
            </div>
        </div>
    );
}
