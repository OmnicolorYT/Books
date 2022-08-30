import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import styles from './AddBookForm.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {closeForm} from "../../store/reducers/modalFormReducers.slice";
import classNames from "classnames/bind";

function AddBookForm() {
    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onSubmit"
    })

    const dispatch = useDispatch()
    const cx = classNames.bind(styles)
    const opened = useSelector(state => state.modalFormReducer.opened)
    const date = new Date()
    const now = date.getFullYear()

    const [state, setState] = useState()

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset()
    }

    const closeFormHandler = () => {
        dispatch(closeForm())
    }

    const onChangeHandler = (data) => {
        setState(data.target.value)
    }

    return(
        <div className={cx({visible: opened}) + " " + styles.modal_wrapper}>
            <div className={styles.form_div}>
                <h1 className={styles.form_header}>Добавление книги</h1>
                <form onSubmit={handleSubmit(onSubmit) } className={styles.form}>
                    <div className={styles.input_field + " " + cx({error: errors?.bookName})}>
                        <input className={styles.text_input}
                               {...register('bookName', {
                                   required: 'Поле обязательно для заполнения'
                               })}
                               placeholder={'Название книги'}
                        />
                        <label className={styles.label} htmlFor={'bookName'}>Название книги</label>
                        {errors?.bookName && <p className={styles.error_message}>{errors.bookName.message}</p>}
                    </div>
                    <div className={styles.input_field + " " + cx({error: errors?.bookAuthor})}>
                        <input className={styles.text_input}
                               {...register('bookAuthor', {
                                   required: 'Поле обязательно для заполнения'
                               })}
                               placeholder={'Автор'}
                        />
                        <label className={styles.label} htmlFor={'bookAuthor'}>Автор</label>
                        {errors?.bookAuthor && <p className={styles.error_message}>{errors.bookAuthor.message}</p>}
                    </div>
                    <div className={styles.input_field + " " + cx({error: errors?.publishingYear})}>
                        <input className={styles.text_input}
                               {...register('publishingYear', {
                                   required: 'Поле обязательно для заполнения',
                                   max: {
                                       value: now,
                                       message: `Год не может быть больше ${now}`
                                   }
                               })}
                               type={"number"}
                               placeholder={'Год издания'}
                        />
                        <label className={styles.label} htmlFor={'publishingYear'}>Год издания</label>
                        {errors?.publishingYear && <p className={styles.error_message}>{errors.publishingYear.message}</p>}
                    </div>
                    <div className={styles.input_field + " " + cx({error: errors?.publishing})}>
                        <input className={styles.text_input}
                               {...register('publishing')}
                               placeholder={'Издательство'}
                        />
                        <label className={styles.label} htmlFor={'publishing'}>Издательство</label>
                        {errors?.publishing && <p className={styles.error_message}>{errors.publishing.message}</p>}
                    </div>
                    <div className={styles.input_field + " " + cx({error: errors?.annotation})}>
                        <textarea className={styles.text_input}
                                  {...register('annotation')}
                                  placeholder={'Аннотация'}
                        >
                        </textarea>
                        <label className={styles.label} htmlFor={'annotation'}>Аннотация</label>
                        {errors?.annotation && <p className={styles.error_message}>{errors.annotation.message}</p>}
                    </div>
                    <div className={styles.state_group + " " + cx({error: errors?.state})}>
                        <p className={styles.label}>Состояние</p>
                        <label className={styles.radio_label + " " + cx({checked: state === 'want'})}>
                            <input className={styles.radio_input}
                                   {...register('state', {
                                       required: 'Необходимо выбрать один из вариантов',
                                       onChange: (e) => {onChangeHandler(e)}
                                   })}
                                   type={"radio"}
                                   id = {'want'}
                                   value={'want'}
                            />
                            В желаемом
                        </label>
                        <label className={styles.radio_label + " " + cx({checked: state === 'have'})}>
                            <input className={styles.radio_input}
                                   {...register('state', {
                                       required: 'Необходимо выбрать один из вариантов',
                                       onChange: (e) => {onChangeHandler(e)}
                                   })}
                                   type={"radio"}
                                   id={'have'}
                                   value={'have'}
                            />
                            Есть
                        </label>
                        <label className={styles.radio_label + " " + cx({checked: state === 'read'})}>
                            <input className={styles.radio_input} {
                                ...register('state', {
                                    required: 'Необходимо выбрать один из вариантов',
                                    onChange: (e) => {onChangeHandler(e)}
                                })}
                                   type={"radio"}
                                   id={'read'}
                                   value={'read'}
                            />
                            Прочтена
                        </label>
                        {errors.state && <p className={styles.error_message}>{errors.state.message}</p>}
                    </div>
                    <div className={styles.input_field + " " + cx({error: errors?.genre})}>
                        <input className={styles.text_input}
                               {...register('genre', {
                                   required: 'Поле обязательно для заполнения'
                               })}
                               placeholder={'Жанр'}
                        />
                        <label className={styles.label} htmlFor={'genre'}>Жанр</label>
                        {errors?.genre && <p className={styles.error_message}>{errors.genre.message}</p>}
                    </div>
                    <div className={styles.input_field + " " + cx({error: errors?.pagesCount})}>
                        <input
                                className={styles.text_input}
                                {...register('pagesCount', {
                                    required: 'Поле обязательно для заполнения'
                                })}
                                type={"number"}
                                placeholder={'Количество страниц'}
                        />
                        <label className={styles.label} htmlFor={'pagesCount'}>Количество страниц</label>
                        {errors?.pagesCount && <p className={styles.error_message}>{errors.pagesCount.message}</p>}
                    </div>
                    <div className={styles.buttons}>
                        <input type={"submit"}/>
                        <input type={"button"} value={"Закрыть"} onClick={() => closeFormHandler()}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBookForm