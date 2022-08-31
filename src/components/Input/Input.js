import React, {forwardRef} from "react";
import styles from "./Input.module.scss";

const Aasd = React.createRef()

const Input = React.forwardRef(({divClass, inputClass, type, placeholder, name, errorMessage}, forwardedRef) => {
    return (
        <div className={divClass}>
            <input className={inputClass}
                   ref={forwardedRef}
                   type={type}
                   placeholder={placeholder}
            />
            <label className={styles.label} htmlFor={name}></label>
            {errorMessage}
        </div>
    )}
)

export default Input