import { Component } from "react";

export default class Social extends Component {
    render() {
        let {  href, img } = this.props
        return (
            <li>
                <a href={href} target="_blank" rel="style">
                    <img src={img} alt="social" />
                </a>
            </li>
        )
    }
}