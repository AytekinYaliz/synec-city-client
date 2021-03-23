import { Input, Row, Col } from 'antd';
import {
    PlusOutlined
} from '@ant-design/icons';


export const header = ({ onChange, onClick }) => {

    return (
        
        <Row>
            <Col span={12}>
                <b>Cities</b>
            </Col>
            <Col span={12}>
                <Input.Search placeholder="city name" onSearch={onClick} enterButton style={{ width: 200 }}  />
            </Col>
        </Row>
    );
}