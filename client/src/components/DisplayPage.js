import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getFile} from '../actions/file'

class DisplayPage extends PureComponent {

    componentWillMount() {
        this.props.getFile(this.props.match.params.id)
    }

    render() {

        const {file} = this.props
        let imagePreview = null
        if (file.imagePreviewUrl) {
            imagePreview = (<img className="displayImg" src={file.imagePreviewUrl} alt="displayImage"/>);
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
        file: state.file
    }
}

export default connect (mapStateToProps,{getFile}) (DisplayPage)