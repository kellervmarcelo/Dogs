/* eslint-disable no-useless-escape */
import React from 'react'

const validation = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um email válido'
    },
    password: {
        regex: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
        message: 'Senha fraca - Mínimo 8 caracteres, 2 letras maísculas, um caracter especial 2 numerais e 3 letras minúsculas'

    },
    number: {
        regex: /^\d+$/,
        message: 'Utilize número apenas. '
    }
}

function useForm(type) {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);
    
    function validate(value) {
        if(type === false) return true;
        if(value.length === 0){
            setError('Preencha um valor.')
            return false;
        } else if (validation[type] && !validation[type].regex.test(value)){
            setError(validation[type].message)
            return false;
        } else {
            setError(null)
            return true;
        }
    }

    function onChange({target}) {
        if(error) validate(target.value);
        setValue(target.value);
    }

    return {
        value, 
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    }
}

export default useForm
