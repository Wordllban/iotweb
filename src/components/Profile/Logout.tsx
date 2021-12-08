import React from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../../firebase/firebase';
import PageProps from '../../interfaces/page'

export const Logout: React.FunctionComponent<PageProps> = () => {
    const history = useHistory();

    const Logout = () => {
        console.log('logouted');
        
        auth.signOut()
            .then(() => history.push('/login'))
            .catch(error => alert(error));
    }

    return (
        <div>
            <h2>Are you sure you want to logout?</h2>
            <div>
                <button onClick={() => history.goBack()}>Cancel</button>
                <button onClick={() => Logout()}>Logout</button>
            </div>
        </div>
    )
}
