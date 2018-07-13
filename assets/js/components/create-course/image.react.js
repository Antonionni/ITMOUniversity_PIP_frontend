import React from "react";
import { InputText } from "primereact/components/inputtext/InputText";

export default class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image || ""
        };

        this.handleChangeImage = (e) => {
            this.setState({
                image: e.target.value
            });
        };
    }
    get image() {
        return this.state.image;
    }
    render() {
        const { image } = this.state;
        return (
            <div className="image ui-g">
                <img src={image} alt="Не найдено" />
                <div className="ui-g-12">
                    <label htmlFor="imageurl" className="ui-g-6">URL изображения:</label>
                    <InputText id="imageurl" className="ui-g-6" onChange={this.handleChangeImage} />
                </div>

            </div>
        );
    }
}