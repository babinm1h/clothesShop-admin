import { FC } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { CreateService } from '../../API/createService';
import { valid } from '../../utils/validation';
import FormControl from '../FormControl/FormControl';
import "./CreateForm.scss"


interface IFormFields {
    title: string
    descr: string
    price: number
    categ: string
    color: string
    size: string
}

interface ICreateFormProps {
    file: File | null
}

const CreateForm: FC<ICreateFormProps> = ({ file }) => {

    const { register, handleSubmit, reset, formState: { errors, isSubmitting, isDirty, isValid } }
        = useForm<IFormFields>({ mode: "onChange" })


    const onSubmit: SubmitHandler<IFormFields> = async (data) => {
        const fd = new FormData()
        fd.append("title", data.title)
        fd.append("price", `${data.price}`)
        fd.append("descr", data.descr)
        fd.append("img", file!)
        fd.append("categories", data.categ.toLowerCase())
        fd.append("size", data.size.toUpperCase())
        fd.append("color", data.color.toLowerCase())

        await CreateService.createProduct(fd)
        reset()
    }



    return (
        <form action="" className="create__form" onSubmit={handleSubmit(onSubmit)}>

            <FormControl type="text" errors={errors.title} label="Title" id="title"
                register={register("title", valid(30))} placeholder="Title" />

            <FormControl type="text" errors={errors.descr} label="Description" id="descr"
                register={register("descr", valid(120))} placeholder="Description" />

            <FormControl type="number" errors={errors.price} label="Price" id="price"
                register={register("price", valid(10, 1))} placeholder="Price" />

            <FormControl type="text" errors={errors.categ} label="Categories" id="categ"
                register={register("categ", valid(30, 1))} placeholder="coat,tshirt..." />

            <FormControl type="text" errors={errors.color} label="Colors" id="color"
                register={register("color", valid(20, 1))} placeholder="white,green..." />

            <FormControl type="text" errors={errors.size} label="Sizes" id="size"
                register={register("size", valid(20, 1))} placeholder="X,M..." />

            <button type="submit" className="create__form__btn"
                disabled={isSubmitting || !file || !isDirty || !isValid}>
                Create
            </button>
        </form>
    );
};

export default CreateForm;