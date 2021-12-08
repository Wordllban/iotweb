import React, { useState } from 'react';
import PageProps from '../../interfaces/page';
import { Redirect, useHistory } from 'react-router-dom';
import { auth } from '../../firebase/firebase';

import styles from "./Input.module.scss";

export const ChangePassword: React.FunctionComponent<PageProps> = (props) => {
    const [changing, setChanging] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [old, setOld] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [error, setError] = useState<string>('');

    const history = useHistory();

    const passwordChangeRequest = () => {
        if (password !== confirm) {
            setError('Please make sure your passwords match.')
            return;
        }

        if(error !== '') setError('');

        setChanging(true);

        auth.currentUser?.updatePassword(password)
            .then(() => {
                alert('password changed successfull.')
                history.push('/')
            })
            .catch(error => {
                setError('Unable to change password');
                alert(error);
                setChanging(false);
            })
    }

    if(auth.currentUser?.providerData[0]?.providerId !== 'password') {
        return <Redirect to="/"/>
    }

    return (
        <div>
            <h1 className={styles.header}>Change password</h1>
            <form className={styles.form}>
            <div>
                    <label className={styles.label} htmlFor="oldPassword">Current Password</label>
                    <input
                        className={styles.field}
                        autoComplete="new-password"
                        type="password"
                        name="oldPassword"
                        id="oldPassword"
                        placeholder="Current password"
                        onChange={event => setOld(event.target.value)}
                        value={old}
                        />
                </div>

                <div>
                    <label className={styles.label} htmlFor="password">New Password</label>
                    <input 
                        className={styles.field}
                        autoComplete="new-password"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter password"
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                        />
                </div>

                <div>
                    <label className={styles.label} htmlFor="confirm">Confirm new Password</label>
                    <input 
                        className={styles.field}
                        autoComplete="new-password"
                        type="password"
                        name="confirm"
                        id="confirm"
                        placeholder="Enter password"
                        onChange={event => setConfirm(event.target.value)}
                        value={confirm}
                        />
                </div>

                <button
                    className={styles.button}
                    disabled={changing}
                    style={{display: "block"}}
                    onClick={() => passwordChangeRequest()}
                >
                    Change
                </button>
                <p style={{color: "red"}}>{error}</p>
            </form>
        </div>
    )
}
