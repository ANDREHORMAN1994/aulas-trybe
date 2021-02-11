import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const random = Math.round(Math.random() * 100);
      setCount(random);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    handleMessage();
    console.log(count);
  }, [count]);

  const handleMessage = () => {
    if (count % 3 === 0 || count % 5 === 0) {
      setMessage('Acerto');
    } else {
      setInterval(setMessage(''), 4000);
    }
  }

  return (
    <div className="App">
      <h1>Questão 1: Faça um componente funcional React com as seguintes funcionalidades:</h1>
      <ul>
        <li>A cada 10 segundos ele gera e exibe na tela um número aleatório de 1 a 100;</li>
        <li>Se o número for múltiplo de 3 ou 5, uma mensagem "Acerto" é exibida na tela;</li>
        <li>A mensagem de acerto é removida 4 segundos depois de ser exibida;</li>
        <li>O timer é removido quando o componente é desmontado.</li>
      </ul>
      <p>{ count }</p>
      <p>{ message }</p>
    </div>
  );
}

export default App;
