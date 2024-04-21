"use client"
import styles from './Resources/styles/Modal.module.css';

import { useEffect, useRef, useState } from 'react'

type ErrorType = {
    name: string;
    message: string;
    errorId?: number;
    stack?: string;
}

export default function Dialog({errMsg}:any) {
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    // const [errorMessage, setErrorMessage] = useState<Error>({name:"", message:""});

    // useEffect(() => {
    //     alert(JSON.stringify(errorMessage,null,2))
    // },[errorMessage])
  
    const closeDialog = () => {
        dialogRef.current?.close();
    }

    const Dialog = (
        <dialog id="errorDialog" ref={dialogRef} className={styles.modalContainer}>
            <div className="flex flex-row justify-between mb-1 pt-0 px-3 text-gray-600">
                <h1 className="text-sm indent-9 mt-1">{errMsg.name}</h1>
                <div className="cursor-pointer rounded border-none w-5 text-xl text-white"
                    onClick={closeDialog}
                >X</div>
            </div>

            <div className={styles.modalBox}>
                <div className={styles.modalScrollBar}>
                    <h1>{errMsg.name}</h1>
                    <div>
                        {errMsg.message}
                    </div>
                </div>
            </div>
        </dialog>
    )
    return Dialog
}
