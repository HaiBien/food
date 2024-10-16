import React, {useEffect, useState} from "react";
import {SHOP} from "./constant";
import {Button, Col, Row} from 'antd'
import {useParams} from 'react-router-dom';

import './index.css'

export default function FoodDetail() {
    const {id} = useParams();

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        setMenu(SHOP[id-1].menu)
    }, [id]);


    return (<div className="container-food">
            <Row gutter={[30, 30]}>
                {menu.map((e, i) => {
                    return <Col key={i} xs={24} sm={12} md={12} lg={8} xl={8}>
                        <div className="p-4 bg-white rounded-lg shadow">
                            <div className="flex items-center">
                                <img src={e.avatar} alt={e.name} className="h-16 w-16 mr-4"/>
                                <div>
                                    <h3 className="font-bold">{e.name} </h3>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-4">{e.description} </p>

                        </div>
                    </Col>
                })}
            </Row>

        </div>
    );
}
