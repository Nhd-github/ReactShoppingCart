import { Component } from "react";

export default class Social extends Component {
    render() {
        let {  href, img } = this.props
        return (
            <li>
                <a href={href} target="_blank" rel="social">
                    <img src={img} alt="social" />
                </a>
            </li>
        )
    }
}