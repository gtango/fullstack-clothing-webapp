export function HandleError (errCode){
    let err = ''
    if(errCode === 401){
        err = 'need to login'
    }

    if(errCode === 500){
        err = 'something went wrong on our end. try again'
    }

    return err
}

