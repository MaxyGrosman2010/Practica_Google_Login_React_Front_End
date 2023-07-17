import jwt_decode from 'jwt-decode';

export default function decode(token){
    return jwt_decode(token);
};