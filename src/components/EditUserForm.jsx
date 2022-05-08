import React from 'react'
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {

    //console.log(props.currentUser)

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name)
    setValue('username', props.currentUser.username)
    setValue('favColor', props.currentUser.favColor)

    const onSubmit = (data, e) => {
        console.log(data)
        data.id = props.currentUser.id

        props.updateUser(props.currentUser.id, data)
        //limpiar campos
        e.target.reset();
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" {...register("name", {
                required: { value: true, message: 'Campo Requerido' }
            })} />
            <div>
                {errors?.name?.message}
            </div>
            <label>Username</label>
            <input type="text" name="username" {...register("username", {
                required: { value: true, message: 'Campo Requerido' }
            })} />
            <div>
                {errors?.username?.message}
            </div>
            <label>Favorite Color</label>
            <input type="text" name="favColor" {...register("favColor", {
                required: { value: true, message: 'Campo Requerido' }
            })} />
            <div>
                {errors?.favColor?.message}
            </div>
            <button>Edit user</button>
        </form>
    );
}

export default EditUserForm;