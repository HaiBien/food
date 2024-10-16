import React from "react";
import {SHOP} from "./constant";
import {Col, Row} from 'antd'
import {HomeOutlined, FieldTimeOutlined, EnvironmentOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom';

import './index.css'

export default function Food() {


    return (<div className="container-food">
        <Row gutter={[30, 30]}>
            {SHOP.map((e, i) => {
                return <Col key={i} xs={24} sm={12} md={12} lg={8} xl={8}>
                    <Link to={`/food/${e.id}`}>
                        <div className="p-4 bg-white rounded-lg shadow">
                            <div className="flex items-center">
                                <img src={e.avatar} alt={e.name} className="h-16 w-16 mr-4"/>
                                <div>
                                    <h3 className="font-bold"><HomeOutlined /> {e.name} </h3>
                                    <p className="text-sm text-pink-600"><FieldTimeOutlined /> {e.time} </p>
                                    <p className="text-sm text-gray-500"><EnvironmentOutlined /> {e.addres} </p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-3">{e.description}</p>
                        </div>
                    </Link>
                </Col>
            })}
        </Row>
    </div>);
}
