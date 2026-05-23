import bcrypt  from 'bcryptjs-react';

var salt = bcrypt.genSaltSync(10);

export function encrypt(pass){
    return bcrypt.hashSync(pass,salt);
}

