import {GoogleLogin} from '@react-oauth/google';
import onSuccess from '../utils/google/onSuccess';
import onError from '../utils/google/onError';

export default function Login(){
    return (
        <div>
            <GoogleLogin onSuccess={onSuccess} onError={onError} 
            text='Signin with your Google Account' />
        </div>
    );
};