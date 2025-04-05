import './containers.css'

export function MainContainer({children}){
    return(
        <div className='main-container'>
            {children}
        </div>
    )
}

export function DivRow({children}){
    return(
        <div className='div-row'>
            {children}
        </div>
    )
}

export function DivCol({children}){
    return(
        <div className='div-col'>
            {children}
        </div>
    )
}