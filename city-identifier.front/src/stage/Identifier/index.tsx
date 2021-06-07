import React from 'react';
import {inject, observer} from 'mobx-react';
import {Button, Card, Col, Row, Select} from 'antd';
import {RouteComponentProps} from "react-router-dom";
import {action, observable} from "mobx";
import InjectNames from "../../store/storeIdentifier";

interface IProps extends RouteComponentProps {

}
@inject(InjectNames.SessionStore)
@observer
class Identifier extends React.Component<IProps> {

    @observable
    arrStartPoint: string [] = [];

    @observable
    arrEndPoint: string [] = [];

    @observable
    startPoint: string = "";

    @observable
    endPoint: string = "";

    @action
    handleInputStartPoint = (value: string) => {
        this.arrStartPoint.push(value)
    }

    @action
    handleInputEndPoint = (value: string) => {
        this.arrEndPoint.push(value)
    }

    render() {
        return <div>
            <Card>
                <Row type={'flex'} justify={'space-between'}>
                    <Col>
                        <h2>{('Город')}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Select mode="combobox" style={{width: '100%'}} placeholder="Введите адрес начальной точки"
                                onChange={(value: string) => this.handleInputStartPoint(value)}>
                            {this.arrStartPoint.map(x => <Select.Option value={x}>{x}</Select.Option>)}
                        </Select>
                    </Col>
                </Row>
                <Row type={'flex'} justify={'space-between'}>
                    <Select mode="combobox" style={{width: '100%'}} placeholder="Введите адрес конечно точки"
                            onChange={(value: string) => this.handleInputEndPoint(value)}>
                        {this.arrEndPoint.map(x => <Select.Option value={x}>{x}</Select.Option>)}
                    </Select>
                </Row>
                <Row>
                    <Col>
                        <Button htmlType={'button'}
                                type="default">Проверить.</Button>
                    </Col>
                </Row>
            </Card>
        </div>;
    }
}

export default Identifier;
