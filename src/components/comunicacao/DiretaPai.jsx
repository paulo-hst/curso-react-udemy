import React from 'react'
import DiretaFilho from './DiretaFilho'

export default function DiretaPai(){
    return(
        <div>
            <DiretaFilho nome="Wellerson" idade={27} nerd={false} />
            <DiretaFilho nome="Arcrebiano" idade={18} nerd={true} />
        </div>
    )
}