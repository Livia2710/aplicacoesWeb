"use client";

export function PrimeiroComponente(){
    function handleClick(){
        console.log("Cliquei no botão")
    }
    return(
        <div>
            Primeiro Componente Turma B
            <button onClick={handleClick}>Clique Aqui</button>
        </div>
    );
}