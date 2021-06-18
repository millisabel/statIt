import React from 'react';

import img from "./AddFile.module.css";
import ImageUploading from 'react-images-uploading';

const AddFile = (props) => {
    const [images, setImages] = React.useState([]);
    const [disabled, setDisabled] = React.useState(false);
    const [mess, setMess] = React.useState('');
    const [errorClass, setErrorClass] = React.useState(img.mess);
    const maxNumber = 3;

    const onChange = (imageList, addUpdateIndex) => {
        if(addUpdateIndex && !imageList[addUpdateIndex].file.size){
            setError(imageList, 'invalid file size, please select another file');
            return;
        }

        for (let i = 1; i < imageList.length; i++) {
            if(addUpdateIndex && imageList[i].file.name === imageList[i-1].file.name){
                setError(imageList, 'there is already a file with the same name, please, select another file');
                return;
            }
        }

        setImages(imageList);

        if(imageList.length > 2){
            setMess('added maximum number of files');
            setDisabled(true);
            setErrorClass(img.mess);
        }
        else if(!imageList.length){
            setMess('');
        }
        else{
            setDisabled(false);
            setMess('you can add 3 files');
            setErrorClass(img.mess);
        }

        return imageList;
    };

    const onError = (errors) => {
        if(errors.maxNumber){
            setMess('select maximum 3 files');
            setErrorClass(img.mess__error);
        }
        if(errors.maxFileSize){
            setMess('invalid file size, max size 5MB');
            setErrorClass(img.mess__error);
        }
    };

    const setError = (arr, mess) => {
        arr.pop();
        setMess(mess);
        setErrorClass(img.mess__error);
    };

    const showImg = (e) => {
        if(e.target.classList.contains(img.active)){
            e.target.classList.remove(img.active);
        }
        else{
            e.target.classList.add(img.active);
        }
    };

    return (
        <div>
            <ImageUploading
                multiple
                value={images}
                onChange={(e, addUpdateIndex) => props.onChange(onChange(e, addUpdateIndex))}
                onError={onError}
                maxNumber={maxNumber}
                maxFileSize={5242880}
                dataURLKey="data_url"
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageRemove,
                  }) => (
                    <div className={img.box}>
                        <button className={img.btnAdd}
                                disabled={disabled}
                                title='maximum number of files - 3, maximum size - 5MB'
                                onClick={onImageUpload}
                        />
                        <div className={errorClass}>{mess}</div>
                        <div className={img.preview}>
                            {imageList.map((image, index) => (
                                <div key={index} className={img.preview_item}>
                                    <img className={img.preview_img} src={image['data_url']} alt={index} onClick={showImg}/>
                                    <button className={img.preview_btn} onClick={() => onImageRemove(index)}>
                                        <span className={img.preview_remove}/>
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