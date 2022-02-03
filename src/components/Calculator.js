import React,{ useState } from "react";
import { Container , Screen,Previous,Current,Button } from "./styled";
const Calculator = ()=>{

    const [current , setCurrent] = useState('');
    const [previous , setPrevious] = useState('');
    const [operation , setOperation]= useState('');

    const printValue=(e)=>{
        const value = e.target.getAttribute("value");
        if(value==="." && current.includes(".")) return;
        setCurrent(current + value);
    }

    const deleteHandler = ()=>{
        setCurrent(String(current).slice(0 , -1))
    }

    const clearHandler = ()=>{
        setCurrent("");
        setPrevious("");
        setOperation("")
    }

    const compute = ()=>{
        let previousNumber = Number(previous);
        let currentNumber = Number(current);
        let result;
        switch(operation){
            case "+":
                result = previousNumber + currentNumber;
                break;
            case "-":
                result = previousNumber - currentNumber;
                break; 
            case "×":
                result = previousNumber * currentNumber;
                break;
            case "÷":
                result = previousNumber / currentNumber;
                break;
             default:
                 break                          
        }
        return result;
    }

    const operatorHandler = (e)=>{
        let operator = e.target.getAttribute("value");
        if(current==="") return;
        if(previous){
            setPrevious(compute())
        }else{
            setPrevious(current)
        }
        setCurrent("");
        setOperation(operator);
        

    }

    const equals = ()=>{
        setPrevious("");
        setOperation("");
        setCurrent(compute())
        
    }
    return(
        <Container>
            <Screen>
                <Previous>{previous} {operation}</Previous>
                <Current>{current}</Current>
            </Screen>
            <Button gridSpan={2} blue onClick={clearHandler}>AC</Button>
            <Button blue onClick={deleteHandler}>DEL</Button>
            <Button value={"+"} onClick={operatorHandler} operation>+</Button>
            <Button value={"1"} onClick={printValue}>1</Button>
            <Button value={"2"} onClick={printValue}>2</Button>
            <Button value={"3"} onClick={printValue}>3</Button>
            <Button value={"-"} onClick={operatorHandler} operation>-</Button>
            <Button value={"4"} onClick={printValue}>4</Button>
            <Button value={"5"} onClick={printValue}>5</Button>
            <Button value={"6"} onClick={printValue}>6</Button>
            <Button value={"÷"} onClick={operatorHandler} operation>÷</Button>
            <Button value={"7"} onClick={printValue}>7</Button>
            <Button value={"8"} onClick={printValue}>8</Button>
            <Button value={"9"} onClick={printValue}>9</Button>
            <Button value={"×"} onClick={operatorHandler} operation>×</Button>
            <Button value={"."} onClick={printValue} blue>.</Button>
            <Button value={"0"} onClick={printValue}>0</Button>
            <Button value={"="} onClick={equals} gridSpan={2} operation>=</Button>
        </Container>
    )
}

export default Calculator;