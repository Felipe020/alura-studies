import Button from "../Button"
import Relogio from "./Relogio"
import style from './Cronometro.module.scss'
import { ITask } from "../../types/task"
import { useState } from "react";
import { tempoParaSegundos } from "../../common/utils/date";

interface Props {
    selecionado: ITask | undefined;
}

export default function Cronometro({selecionado}: Props) {
    const [tempo, setTempo] = useState<number>();
    if(selecionado?.time){
        setTempo(tempoParaSegundos(selecionado.time))
    }
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Button
                texto = "Começar!"
            />
        </div>
    )
}