import {Button,Badge } from 'antd';
import React from 'react';

export default function CustomBadgeButton ({count,onClick,type,size,children,active}){
    const [isActive,setIsActive] = React.useState(false)
    
    React.useEffect(()=> {
        if(active){
            setIsActive(active)
        }
    },[active])
    return (
        <Badge count={count}>
        <Button onClick={onClick} type={isActive ?  "primary" : type} size={size} >
         {children}
        </Button> 
    </Badge>
    )
}