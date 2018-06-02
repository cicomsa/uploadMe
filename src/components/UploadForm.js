import React, {PureComponent} from 'react'

export default class UploadForm extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {file: '',imagePreviewUrl: ''}
    }
     
    handleSubmit = (e) => {
        e.preventDefault();
  
        this.props.onSubmit(this.state)
        this.setState({
            file: "",
            imagePreviewUrl: ""
        })
    }
     
    handleImageChange = (e) => {
        e.preventDefault();
     
        let reader = new FileReader();
        let file = e.target.files[0];
     
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            })
        }
        reader.readAsDataURL(file)
    }
     
      render() {
        let {imagePreviewUrl} = this.state;
        let imagePreview = null;
        if (imagePreviewUrl) {
            imagePreview = (<img src={imagePreviewUrl} alt="filePreview" width="300px"/>);
        } else {
            imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
     
        return (
          <div className="previewComponent">
            <form onSubmit={(e)=>this.handleSubmit(e)}>
              <input className="fileInput"
                type="file"
                onChange={(e)=>this.handleImageChange(e)} />
              <button className="submitButton"
                type="submit"
                onClick={(e)=>this.handleSubmit(e)}>Upload Image</button>
            </form>
            <div className="imgPreview">
              {imagePreview}
            </div>
          </div>
        )
    }
     
}