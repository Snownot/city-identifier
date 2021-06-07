import React from 'react';
import {inject, observer} from 'mobx-react';
import {Button, Card, Col, Modal, Row, Select} from 'antd';
import {RouteComponentProps} from "react-router-dom";
import {action, observable} from "mobx";
import InjectNames from "../../store/storeIdentifier";
import SessionStore from "../../store/sessionStore";
import {ComparedCityDto} from "../../service/client";

interface IProps extends RouteComponentProps {
    sessionStore?: SessionStore;
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

    @observable
    submitStartPoint: string = "";

    @observable
    submitEndPoint: string = "";

    @observable
    disabled: boolean = true;

    @observable
    cities: ComparedCityDto = {startCity: "", endCity: ""}


    @action
    handleInputStartPoint = async (value: string) => {
        if (value.length > 3) {
            let result = await this.props.sessionStore!.getStartPoint(value);
            this.submitStartPoint = result.city
            this.arrStartPoint.push(result.value)
        }
        this.handleDisabled();
    }

    @action
    handleInputEndPoint = async (value: string) => {
        if (value.length > 3) {
            let result = await this.props.sessionStore!.getEndPoint(value);
            this.submitEndPoint = result.city
            this.arrEndPoint.push(result.value)
        }
        this.handleDisabled();
    }

    @action
    handleOnClick = async () => {
        let submit : ComparedCityDto = {startCity: this.submitStartPoint , endCity:this.submitEndPoint}
        let result = await this.props.sessionStore!.comparedCity(submit);
        if (result.isCompared) {
            Modal.confirm({
                okText: 'Yes',
                okType: 'danger',
                title: 'Сообщение',
                okCancel: false,
                content: 'Поздравляем, Ваш город - ' + this.cities.endCity
            });
        } else {
            Modal.confirm({
                okText: 'Yes',
                okType: 'danger',
                title: 'Сообщение',
                okCancel: false,
                content: 'Упс, похоже адреса из разныхгородов.'
            });
        }
    }

    @action
    handleDisabled = () => {
        this.disabled = this.arrStartPoint.length < 1 && this.arrEndPoint.length < 1;
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
                    <Select mode="combobox" style={{width: '100%'}} placeholder="Введите адрес начальной точки"
                            onChange={(value: string) => this.handleInputStartPoint(value)}>
                        {this.arrStartPoint.map(x => <Select.Option value={x}>{x}</Select.Option>)}
                    </Select>
                </Row>
                <Row type={'flex'} justify={'space-between'}>
                    <Select mode="combobox" style={{width: '100%'}} placeholder="Введите адрес конечно точки"
                            onChange={(value: string) => this.handleInputEndPoint(value)}>
                        {this.arrEndPoint.map(x => <Select.Option value={x}>{x}</Select.Option>)}
                    </Select>
                </Row>
                <Row>
                    <Col>
                        <Button htmlType={'button'} disabled={this.disabled} onClick={this.handleOnClick}
                                type="default">Проверить.</Button>
                    </Col>
                </Row>
            </Card>
        </div>;
    }
}

export default Identifier;
