import React, {
    Component
} from 'react'
import WhyJoin from './WhyJoin';
import './Recruitmentinfo.css';

export class RecruitmentInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            infoPage: 'why-join'
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    updateInfo = (newInfo) => {
        this.setState({
            infoPage: newInfo
        })
    }

    render() {
        if (this.state.infoPage === "why-join") {
            return ( <
                div >
                <
                div className = "recruitment-header-buffer" / >
                <
                WhyJoin updatePage = {
                    this.props.updatePage
                }
                /> < /
                div >
            )
        }
    }
}

export default RecruitmentInfo