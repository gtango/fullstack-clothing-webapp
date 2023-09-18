function HandleOutsideClick(ref, ids, untouchables){
    return function HandleOutsideClickEvent(event) {

        // Check if we clicked on the specificed element
        if(ref.current.contains(event.target)){
            console.log("Inside our ref");

            if(ids.includes(event.target.id)){
                console.log("we would close other")
            } else {
                console.log('we would do nothing')
            }
        } else {

            document.querySelectorAll('.show').forEach((item) => {
                if(!item.id === '' && !untouchables.includes(item.id)){
                    item.classList.remove("show")
                }
            })
            document.querySelectorAll('.active').forEach((item) => {
                if(!item.id === '' && !untouchables.includes(item.id)){
                    item.classList.remove("active")
                }
            })
        }
    }
}

export default HandleOutsideClick;