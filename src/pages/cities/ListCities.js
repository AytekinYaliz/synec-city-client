import { useState, useEffect } from 'react';
import { Table } from 'antd';
import { searchCities } from './fetchCities';
import { Input, Row, Col } from 'antd';

const columns = [
{
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
},
{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true
}
];

export const ListCities = () => {
    const [loading, setLoading] = useState(false);
    const [cities, setCities] = useState([]);

    const getCities = (params = {}) => {
        setLoading(true);
        searchCities(params)
            .then(res => res.data)
            .then(res => {
                setCities(res.data);
                setLoading(false);
            });
    };
    useEffect(() => {
        console.log("component is mounted");
        // getCities({ pagination });
    }, []);

    const onSearch = (name) => {
        if(!name) {
            return alert('Please enter a value.')
        }
        getCities({ name });
    };

    const header = () => {
        return (
            <Row>
                <Col span={12}>
                    <b>Cities</b>
                </Col>
                <Col span={12}>
                    <Input.Search placeholder="city name" onSearch={onSearch} enterButton style={{ width: 200 }}  />
                </Col>
            </Row>
        );
    }

    return (
        <Table bordered 
            title={header}
            size="small"
            columns={columns}
            rowKey={city => city.id}
            loading={loading}
            dataSource={cities} 
            // pagination={pagination}
            // onChange={handleTableChange}
        />
    );
}

