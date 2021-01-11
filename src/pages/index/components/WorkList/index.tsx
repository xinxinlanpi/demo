import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Row from '../Row';

interface Props {
    rowNumber: number;
}
export default function WorkList(props: Props) {
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);

    const getList = () => {
        axios.get('/items')
          .then(function (response) {
            formatData(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const compare = (property: string) => {
        return function(a:any,b:any){
            let value1 = a[property];
            let value2 = b[property];
            return value1 - value2;
        }
    }

    const formatData = (list: any) => {
        const total = list.length;
        const gropNumber = props.rowNumber * 2;
        const totalgrop= Math.floor((total + gropNumber -1)/gropNumber);
        let res = [];
        list.sort(compare('order'));
        console.log('order==>',list);
        for(let i=0; i < totalgrop; i++) {
            res.push(list.slice(gropNumber*i,gropNumber*i + gropNumber));
        }
        console.log("grop==>",res); 
        setTotal(total); 
        setList(res as any);
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        <div className="workList-content">
            {list.map((item:any,key)=>
                <Row data={item} key={key} rowNumber={props.rowNumber} total={total} k={key}/>
            )}          
        </div>
    );
}
