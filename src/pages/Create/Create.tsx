import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./Create.scss"
import { BsUpload } from "react-icons/bs"
import CreateForm from '../../components/CreateForm/CreateForm';


const Create = () => {
    const [file, setFile] = useState<null | File>(null)

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files![0])
    }


    return (
        <div className="create">
            <Sidebar />
            <div className="create__content">
                <h1>Create new product</h1>
                <div className="create__block">

                    <div className="create__block__left">
                        <img src={file
                            ? URL.createObjectURL(file)
                            : "https://torgsnab-nn.ru/1c_exchange/praktika/import_files/4a/4a41d29b56b511e98006d017c29b3ebf_4a41d29c56b511e98006d017c29b3ebf.jpeg"} alt="choose img" />

                        <div className="create__upload">
                            <label htmlFor="file" className="create__upload__label">
                                <BsUpload className="create__upload__icon" />Upload Image
                            </label>
                            <input type="file" id="file" accept="image/*"
                                onChange={handleFile} />
                        </div>
                    </div>


                    <div className="create__block__right">
                        <CreateForm file={file}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;