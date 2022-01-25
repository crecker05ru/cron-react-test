import React from 'react'
import {Row,Divider} from 'antd';

export default function ArrowDropdownList({ord}){
    const [isClosed,setIsClosed] = React.useState(false)
    return (
        <>
        {isClosed ? <> </>
                     : <div className='padding-left-10' >
                     <Row >добавки</Row>
                     {ord.additionals.map(add => (<Row key={add.name}>{add.name} - <span>{add.price}</span></Row>))}
                     
                     <Divider style={{margin: "10px"}}/>
                 </div>
                     }
        </>
    )
}