import React from 'react';

import file from "./AddFile.module.css";
import ImageUploading from 'react-images-uploading';

const AddFile = () => {
    const [images, setImages] = React.useState([]);
    const [disabled, setDisabled] = React.useState(false);
    const [mess, setMess] = React.useState('');
    const [errorClass, setErrorClass] = React.useState(file.mess);
    const maxNumber = 3;

    const onChange = (imageList) => {
        setImages(imageList);
        if(imageList.length > 2){
            setMess('added maximum number of files');
            setDisabled(true);
            setErrorClass(file.mess);
        }
        else if(!imageList.length){
            setMess('');
        }
        else{
            setDisabled(false);
            setMess('you can add 3 files');
            setErrorClass(file.mess);
        }
    };

    const onError = (errors) => {
        if(errors.maxNumber){
            setMess('select maximum 3 files');
            setErrorClass(file.mess__error);
        }
    };

    return (
        <div>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                onError={onError}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageRemove
                }) => (

                    <div className={file.box}>
                        <button className={file.btnAdd}
                                disabled={disabled}
                                title='max 3'
                                onClick={onImageUpload}
                        />
                        <div className={errorClass}>{mess}</div>
                        <div className={file.preview}>
                            {imageList.map((image, index) => (
                                <div key={index} className={file.preview_item}>
                                    <img className={file.preview_img} src={image['data_url']} alt={index} />
                                    <button className={file.preview_btn} onClick={() => onImageRemove(index)}>
                                        <span className={file.preview_remove}/>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </ImageUploading>
        </div>
    );
};

export default AddFile;