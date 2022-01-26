import React from 'react'
import {Row,Divider,Button} from 'antd';
import {DownOutlined} from  '@ant-design/icons'

export default function AdditionalList ({order}) {
    const {name,price,count,additionals} = order
    const [isClosed,setIsClosed] = React.useState(false)
    console.log()

    // const isClosedHandler = () => {
    //     setIsClosed(!isClosed)
    // }

    return (
        <>
        <div key={name} >
                    <Row >{name}-<span>{price}р </span> <span> ({count} шт.)</span>
                    <Button type="link" onClick={() => setIsClosed(!isClosed)}><DownOutlined  className={isClosed?"rotate-180 closed ":"rotate-180"}/></Button>
                    </Row>
                    {isClosed ? <> </>
                     : <div className='padding-left-10' >
                     <Row >добавки</Row>
                     {additionals.map(add => (<Row key={add.name}>{add.name} - <span>{add.price}</span></Row>))}
                     
                     <Divider style={{margin: "10px"}}/>
                 </div>
                     }
                    
                
         </div>
        </>
    )
}