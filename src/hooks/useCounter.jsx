import React, { useState } from "react";

// reglas para trabajar con custom hooks:
// 1: el nombre de nuestro hook empiece con use + nombreDelHook
// 2: dentro de nuestro custom hook vamos a usar otros hooks de React 

export const useCounter = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    // devolvemos todos los valores y funciones que queramos reutilizar en un obj
    return {
        count,
        increase,
        decrease,
        reset
    }
 }