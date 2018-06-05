import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import UploadForm from './UploadForm'
import {uploadFile, getFiles} from '../actions/file'

class UploadPage extends PureComponent {

    state = {imagePreviewUrl: ''}

    componentWillMount() {
        this.props.getFiles()
    }

    addFile = (file) => {
        this.props.uploadFile(file) 
    }

    render() {

        const {file, files} = this.props
     
        return (
            <div>
                <p>Preview image</p>
                <UploadForm initialValues={file} onSubmit={this.addFile}/> 
                {files.map(file => 
                    <div className="fileId" key={file.id}>
                        <Link to={`/display/${file.id}`}>
                            <p>{file.id}</p>
                        </Link>
                    </div>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        file: state.file,
        files: state.files
    }
}

export default connect (mapStateToProps, {uploadFile, getFiles}) (UploadPage)


