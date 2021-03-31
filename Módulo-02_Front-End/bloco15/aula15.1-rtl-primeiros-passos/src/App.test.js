import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('Aprendendo a usar o React-Test-Library', () => {
  test('Testando se o HELLO WORLD existe no app.js', () => {
    const { getByText } = render(<App />);
    const testWord = getByText(/HELLO WORLD/i);
    expect(testWord).toBeInTheDocument();
  });

  test('Testando se a label possui um imput', () => {
    const { getByLabelText } = render(<App />);
    const inputText = getByLabelText('BLOCO 15.1 - React-Test-Library');
    expect(inputText).toBeInTheDocument();
    expect(inputText.type).toBe('text');
  });

  test('Testando se se existe 2 botões', () => {
    const { getAllByRole } = render(<App />);
    const buttonElement = getAllByRole('button');
    expect(buttonElement.length).toBe(2);
  });

  test('Testando se existe o botão "ENVIAR"', () => {
    const { getByTestId } = render(<App />);
    const buttonSend = getByTestId('IdButtonSend');
    expect(buttonSend).toBeInTheDocument();
    expect(buttonSend.innerHTML).toBe('ENVIAR');
  });
});

describe('Aprendendo a testar os Eventos', () => {
  test('Testando o FireEvent', () => {
    // MEUS ELEMENTOS
    const { getByLabelText, getByTestId } = render(<App />);
    const inputText = getByLabelText('BLOCO 15.1 - React-Test-Library');
    const buttonSend = getByTestId('IdButtonSend');
    const messageResult = getByTestId('resultId');

    // MESSAGEM DE TESTE
    const testMessage = 'XABLAU';

    // ESTADO INICIAL ESPERADO
    expect(inputText).toBeInTheDocument();
    expect(buttonSend).toBeInTheDocument();
    expect(messageResult).toBeInTheDocument();
    expect(inputText.value).toBe('');
    expect(messageResult).toHaveTextContent('VALOR:');

    // EVENTOS APLICADOS
    fireEvent.change(inputText, { target: { value: testMessage } });
    fireEvent.click(buttonSend)

    // RESULTADOS ESPERADOS
    expect(inputText).toHaveValue('');
    expect(messageResult).toHaveTextContent(`VALOR: ${testMessage}`);
  });
});
