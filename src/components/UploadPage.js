import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import UploadForm from './UploadForm'
import {uploadFile} from '../actions/uploadFile'

class UploadPage extends PureComponent {

    state = {imagePreviewUrl: ''}

    addFile = (file) => {
        this.props.uploadFile(file) 
    }

    render() {

        const {file} = this.props
     
        return (
            <div>
                <p>Preview image</p>
                <UploadForm initialValues={file} onSubmit={this.addFile}/>             
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        file: state.uploadFile
    }
}

export default connect (mapStateToProps, {uploadFile}) (UploadPage)


