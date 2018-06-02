import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

class DisplayPage extends PureComponent {
    render() {

        const {file} = this.props
       
        return (
            <div>
                <p>Display here</p>
                <img src={file.imagePreviewUrl} alt="viewImage" width="300px"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        file: state.uploadFile
    }
}

export default connect (mapStateToProps) (DisplayPage)