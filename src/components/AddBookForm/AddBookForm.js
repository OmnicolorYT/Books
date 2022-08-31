import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import styles from './AddBookForm.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {closeForm} from "../../store/reducers/modalFormReducers.slice";
import {addBook} from "../../store/reducers/booksReducers.slice"
import classNames from "classnames/bind";
import Input from "../Input/Input";

const date = new Date()
const now = date.getFullYear()

function AddBookForm() {
    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
        reset
    } = useForm({
        mode: "onSubmit"
    })

    const dispatch = useDispatch()
    const cx = classNames.bind(styles)
    const opened = useSelector(state => state.modalFormReducer.opened)

    const [state, setState] = useState()

    const onSubmit = (data) => {
        dispatch(addBook(data))
        reset()
        dispatch(closeForm())
    }

    const closeFormHandler = () => {
        dispatch(closeForm())
    }

    const onChangeHandler = (data) => {
        setState(data.target.value)
    }

    return(
        <div className={cx({visible: opened}, styles.modalWrapper)}>
            <div className={styles.formDiv}>
                <h1 className={styles.formHeader}>Добавление книги</h1>
                <form onSubmit={handleSubmit(onSubmit) } className={styles.form}>
                    <div className={cx(styles.inputField, {error: errors?.bookName})}>
                        <input className={styles.textInput}
                               {...register('name', {
                                   required: 'Поле обязательно для заполнения'
                               })}
                               placeholder={'Название книги'}
                        />
                        <label className={styles.label} htmlFor={'name'}>Название книги</label>
                        {errors?.bookName && <p className={styles.errorMessage}>{errors.bookName.message}</p>}
                    </div>
                    <Input
                        name={'name'}
                        divClass={cx(styles.inputField, {error: errors?.bookName})}
                        inputClass={styles.textInput}
                        ref={register('asd', {
                            required: 'Поле обязательно для заполнения'
                        })}
                        placeholder={'Название книги'}
                        errorMessage={errors?.bookName && <p className={styles.errorMessage}>{errors.bookName.message}</p>}
                    />
                    <div className={cx(styles.inputField, {error: errors?.bookAuthor})}>
                        <input className={styles.textInput}
                               {...register('author', {
                                   required: 'Поле обязательно для заполнения'
                               })}
                               placeholder={'Автор'}
                        />
                        <label className={styles.label} htmlFor={'author'}>Автор</label>
                        {errors?.bookAuthor && <p className={styles.errorMessage}>{errors.bookAuthor.message}</p>}
                    </div>
                    <div className={cx(styles.inputField, {error: errors?.publishingYear})}>
                        <input className={styles.textInput}
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
                        {errors?.publishingYear && <p className={styles.errorMessage}>{errors.publishingYear.message}</p>}
                    </div>
                    <div className={cx(styles.inputField, {error: errors?.publishing})}>
                        <input className={styles.textInput}
                               {...register('publishing')}
                               placeholder={'Издательство'}
                        />
                        <label className={styles.label} htmlFor={'publishing'}>Издательство</label>
                        {errors?.publishing && <p className={styles.errorMessage}>{errors.publishing.message}</p>}
                    </div>
                    <div className={cx(styles.inputField, {error: errors?.annotation})}>
                        <textarea className={styles.textInput}
                                  {...register('annotation')}
                                  placeholder={'Аннотация'}
                        >
                        </textarea>
                        <label className={styles.label} htmlFor={'annotation'}>Аннотация</label>
                        {errors?.annotation && <p className={styles.errorMessage}>{errors.annotation.message}</p>}
                    </div>
                    <div className={cx(styles.stateGroup, {error: errors?.state})}>
                        <p className={styles.label}>Состояние</p>
                        <label className={cx(styles.radioLabel, {checked: state === 'want'})}>
                            <input className={styles.radioInput}
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
                        <label className={cx(styles.radioLabel, {checked: state === 'have'})}>
                            <input className={styles.radioInput}
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
                        <label className={cx(styles.radioLabel, {checked: state === 'read'})}>
                            <input className={styles.radioInput} {
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
                        {errors.state && <p className={styles.errorMessage}>{errors.state.message}</p>}
                    </div>
                    <div className={cx(styles.inputField, {error: errors?.genre})}>
                        <input className={styles.textInput}
                               {...register('genre', {
                                   required: 'Поле обязательно для заполнения'
                               })}
                               placeholder={'Жанр'}
                        />
                        <label className={styles.label} htmlFor={'genre'}>Жанр</label>
                        {errors?.genre && <p className={styles.errorMessage}>{errors.genre.message}</p>}
                    </div>
                    <div className={cx(styles.inputField, {error: errors?.pagesCount})}>
                        <input
                                className={styles.textInput}
                                {...register('pagesCount', {
                                    required: 'Поле обязательно для заполнения',
                                    max: {
                                        value: 9999,
                                        message: 'Значение не больше 9999'
                                    }
                                })}
                                type={"number"}
                                placeholder={'Количество страниц'}
                        />
                        <label className={styles.label} htmlFor={'pagesCount'}>Количество страниц</label>
                        {errors?.pagesCount && <p className={styles.errorMessage}>{errors.pagesCount.message}</p>}
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