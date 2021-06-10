import React from 'react';

import file from "./AddFile.module.css";
import ImageUploading from 'react-images-uploading';

const AddFile = () => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 3;

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageRemove,
                  }) => (
                    <div className="upload__image-wrapper">
                        <div className={file.boxForBtn}>
                            <button className={file.btnAdd}
                                    onClick={onImageUpload}
                            />
                        </div>
                        <div className={file.preview}>
                            {imageList.map((image, index) => (
                                <div key={index} className={file.preview_item}>
                                    <img className={file.preview_img} src={image['data_url']} alt="" />
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