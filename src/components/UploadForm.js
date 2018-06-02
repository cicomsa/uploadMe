import React, {PureComponent} from 'react'

export default class UploadForm extends PureComponent {
    state = {file: ''}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    handleImageChange = (e) => {
        e.preventDefault()
        let file = e.target.files[0]
        this.setState({
            file: file
        })
    }    

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="fileInput"
                        type="file"
                        onChange={this.handleImageChange} />
                    <button 
                        className="submitButton"
                        type="submit"
                        onClick={this.handleSubmit}>
                        Upload Image
                    </button>
                </form>
            </div>
        )
    }
}