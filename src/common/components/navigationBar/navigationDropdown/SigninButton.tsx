import { useContext } from 'react';
import { AccountModalContext } from '../../../contexts';

export function SigninButton() {
    const { setAccountModalVisible } = useContext(AccountModalContext)!;

    return (
            <p className="text-sm button primary" onClick={() => setAccountModalVisible(true)}>Sign In</p>
    )
}