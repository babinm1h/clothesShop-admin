export const valid = (max: number, min?: number,) => {
    return {
        required: { value: true, message: "Обязательное поле" },
        minLength: { value: min || 5, message: "Длина поля не менее 5 символов" },
        maxLength: { value: max, message: `Длина поля не более ${max} символов` }
    }
}
