import decode from './for_backend_usage_only';

export default function onSuccess(credentialResponse){
    let decoded = decode(credentialResponse.credential);
    console.log(decoded);
};