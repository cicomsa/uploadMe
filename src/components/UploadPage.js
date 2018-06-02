import React, {PureComponent} from 'react'


export default class UploadPage extends PureComponent {
    state = {file: ''}

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.file)
    }

    handleImageChange = (e) => {
        e.preventDefault()
        let file = e.target.files[0]
        this.setState({
            file: file
        })
        console.log('file added')
    }    

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="fileInput"
                        type="file"
                        onChange={(e)=>this.handleImageChange(e)} />
                    <button 
                        className="submitButton"
                        type="submit"
                        onClick={(e)=>this.handleSubmit(e)}>
                        Upload Image
                    </button>
                </form>
            </div>
        )
    }
}