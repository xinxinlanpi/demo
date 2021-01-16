import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Row from '../Row';

interface Props {
    rowNumber: number;
    outResize: boolean;
}
export default function WorkList(props: Props) {
    const [listOrigin, setListOrigin] = useState([]);
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [num, setNum] = useState(props.rowNumber);
    const CON = useRef<HTMLDivElement | null>(null);

    const getList = () => {
        axios.get('/items')
          .then(function (response) {
            setListOrigin(response.data);
            if(props.outResize){
                let num = getNum();
                formatData(response.data,num);
            } else {
                formatData(response.data,num);
            }           
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const getNum = () => {
        let numb = props.rowNumber;
        if(CON.current){
            numb = Math.floor((CON.current.clientWidth-60)/140); 
        }
        setNum(numb);
        return numb;
    }

    const compare = (property: string) => {
        return function(a:any,b:any){
            let value1 = a[property];
            let value2 = b[property];
            return value1 - value2;
        }
    }

    const unique = (list: any) => {
        let res = [];
        for (let i=0;i<list.length;i++) {
            if(!haveKey(res, 'phase',list[i].phase)){
                res.push(list[i]);
            }
        }
        // list.map((item: any)=>{
        //     if(!haveKey(res, 'phase',item.phase)){
        //         res.push(item);
        //     }
        // });
        return res;
    }

    const haveKey = (list: any, key: string, value: string) => { //phase
        let res = false;
        for (let item of list) {
            if(item[key]===value){
                res = true;
                break;
            }
        }
        return res;
    }

    const formatData = (list: any,num: number) => {
        let total = list.length;
        const gropNumber = num * 2;
        let totalgrop= Math.floor((total + gropNumber -1)/gropNumber);
        let res = [];
        list.sort(compare('order'));
        console.log('order==>',list);
        list = unique(list);
        total = list.length;
        totalgrop= Math.floor((total + gropNumber -1)/gropNumber);
        console.log('unique==>',list);
        for(let i=0; i < totalgrop; i++) {
            res.push(list.slice(gropNumber*i,gropNumber*i + gropNumber));
        }
        console.log("grop==>",res); 
        setTotal(total); 
        setList(res as any);
    }

    const resize = () => {
        getList();
    }

    const addResize = () => {
        window.onresize = resize;
    }

    useEffect(() => {
        if(props.outResize){
            addResize();
        }
        getList();
    }, []);

    return (
        <div className="workList-con" ref={CON}>
        <div className="workList-content" >
            {list.map((item:any,key)=>
                <Row data={item} key={key} rowNumber={num} total={total} k={key}/>
            )}          
        </div>
    </div>
    );
}
