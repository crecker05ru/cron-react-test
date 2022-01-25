import React from 'react'
import {Row,Divider,Button} from 'antd';
import {DownOutlined} from  '@ant-design/icons'

export default function AdditionalList ({order}) {
    const [isClosed,setIsClosed] = React.useState(false)

    const isClosedHandler = () => {
        setIsClosed(!isClosed)
    }
    
    return (
        <>
        {order.map(ord => <div key={ord.name} >
                    <Row >{ord.name}-<span>{ord.price}р </span> <span> ({ord.count} шт.)</span>
                    <Button type="link" onClick={isClosedHandler}><DownOutlined  className={isClosed?"rotate-180 closed ":"rotate-180"}/></Button>
                    </Row>
                    {isClosed ? <> </>
                     : <div className='padding-left-10' >
                     <Row >добавки</Row>
                     {ord.additionals.map(add => (<Row key={add.name}>{add.name} - <span>{add.price}</span></Row>))}
                     
                     <Divider style={{margin: "10px"}}/>
                 </div>
                     }
                    
                
                </div>)}
        </>
    )
}