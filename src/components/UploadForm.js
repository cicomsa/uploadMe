import React, {PureComponent} from 'react'

export default class UploadForm extends PureComponent {
   
    state = {file: '',imagePreviewUrl: ''}
       
    handleSubmit = (e) => {
        e.preventDefault();
  
        this.props.onSubmit(this.state)
        this.setState({
            imagePreviewUrl: ""
        })
        this.refs.file.value = ""
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
            imagePreview = (<img src={imagePreviewUrl} alt="filePreview"/>);
        }
     
        return (
          <div className="previewComponent">    
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <input className="fileInput"
                    type="file"
                    onChange={(e)=>this.handleImageChange(e)} 
                    ref="file"/>
                <button className="submitButton"
                    type="submit"
                    onClick={(e)=>this.handleSubmit(e)}>
                    Upload Image
                 </button>
            </form>
            <div className="imgPreview">
                {imagePreview}
            </div>
          </div>
        )
    }
     
}