import React, {PureComponent} from 'react'

export default class UploadForm extends PureComponent {
   
    state = {file: '', imagePreviewUrl: ''}
       
    handleSubmit = (e) => {
        e.preventDefault();
  
        this.props.onSubmit(this.state)
        this.setState({
            imagePreviewUrl: ''
        })
        this.refs.file.value = ''
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
        const {imagePreviewUrl, file} = this.state
        let imagePreview = null
        if (imagePreviewUrl) {
            imagePreview = <img src={imagePreviewUrl} alt="filePreview"/>
        }
     
        return (
          <div>    
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <input 
                    type="file"
                    onChange={(e)=>e.target.files? 
                        (e.target.files[0].size<500032?this.handleImageChange(e):
                        console.log("Warning: File too large to upload. Try another one.")):""} 
                    ref="file"/>
                {file.size<500032 && 
                    <button
                        type="submit"
                        onClick={(e)=>this.handleSubmit(e)}>
                        Upload Image
                    </button>
                }
            </form>
            {imagePreview}
          </div>
        )
    }
     
}