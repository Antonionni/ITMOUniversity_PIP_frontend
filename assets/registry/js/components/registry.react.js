import React, { Component } from 'react';
import { InputText } from 'primereact/components/inputtext/InputText';
import { Button } from 'primereact/components/button/Button';
import { REGISTARY_INPUTS } from '../contants';

export default class Registry extends Component {
    constructor(props) {
        super(props);
    }
    renderNode(text, reference) {
        return (
            <div key={`key-${reference}`}>
                <div>
                    <label>{`${text}:`}</label>
                </div>
                <div>
                    <InputText ref={(node) => { this[reference] = node; }} placeholder={text} />
                </div>
            </div>
        );
    }
    render() {
        debugger;
        return (
            <div className="registry-content">
                <div className="other-type-registrations"></div>
                <div className="registration-panel">
                    {
                        REGISTARY_INPUTS.map((item) => {
                            return this.renderNode(item.text, item.reference)
                        })
                    }
                    <div className="buttons">
                        <Button label="Зарегестрироваться" onClick={this.handleSaveButtonClick} />
                    </div>
                </div>
            </div>
        );
    }
}
