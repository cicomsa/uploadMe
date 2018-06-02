import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

class DisplayPage extends PureComponent {

    diplayImage = () => {
        if (this.props.file.imagePreviewUrl !== null)
        <img src={this.props.file.imagePreviewUrl} alt="viewImage" width="300px"/>
    }
    render() {

        const {file} = this.props
        let imagePreview = null
        if (file.imagePreviewUrl) {
            imagePreview = (<img className="displayImg" src={file.imagePreviewUrl} alt="displayImage" width="300px"/>);
        }
        
        return (
            <div>
                <p>Display image</p>
                {/* <img src={file.imagePreviewUrl} alt="viewImage" width="300px"/> */}
                {imagePreview}
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