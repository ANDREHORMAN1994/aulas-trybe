import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import InputTodo from '../InputTodo';
import Item from '../Item';

afterEach(cleanup);

describe('Testando a aplicação, testando input', () => {
  test('Verificando se o label e o input existem no documento', () => {
    const { getByLabelText, getByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const labelTask = getByText('Tarefa:');
    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });

  test('Verificando o tipo do input', () => {
    const { getByLabelText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    expect(inputTask.type).toBe('text');
  });
});

describe('EX01 - Testando funcionalidades do Botão "Adicionar"', () => {
  test('Verificar se o botão existe', () => {
    const { getByTestId } = render(<InputTodo />);
    const button = getByTestId('id-button-add');
    expect(button).toBeInTheDocument();
  });

  test('Verificar se o botão possui o texto "Adicionar"', () => {
    const { getByTestId } = render(<InputTodo />);
    const button = getByTestId('id-button-add');
    expect(button.value).toBe('Adicionar');
  });

  test('Ao ser clicado a tarefa digitada pelo o usuário precisa ser salva', () => {
    // MEUS ELEMENTOS ANTES DOS EVENTOS
    const { getByLabelText, getByTestId, getAllByTestId } = render(<App />);
    const inputLabel = getByLabelText('Tarefa:');
    const button = getByTestId('id-button-add');

    // TESTE PARA O VALOR DO INPUT
    const result = 'XABLAU';

    // ANTES DO CLIQUE DO BOTÃO
    expect(inputLabel.value).toBe('');

    // EVENTOS
    fireEvent.change(inputLabel, { target: { value: result } });
    fireEvent.click(button);

    // MEUS ELEMENTOS DEPOIS DOS EVENTOS
    const contentList = getAllByTestId('id-content-list');

    // DEPOIS DO CLIQUE
    expect(inputLabel.value).toBe('');
    expect(contentList[0].innerHTML).toBe(result);
  });
});

describe('EX02 - Testando aparição dos elementos na lita', () => {
  test('Adição de tarefas já prontas na aplicação.', () => {
    const arrayTasks = ['estudar', 'trabalhar', 'ficar rico'];

    render(<App />);
    const inputLabel = screen.getByLabelText('Tarefa:');
    const button = screen.getByTestId('id-button-add');

    expect(inputLabel).toHaveValue('');

    arrayTasks.forEach((task, index, array) => {
      userEvent.type(inputLabel, task);
      fireEvent.click(button);

      const listTask = screen.getAllByTestId('id-content-list');
      expect(listTask[index]).toHaveTextContent(array[index]);
    });

    const listTask = screen.getAllByTestId('id-content-list');
    listTask.forEach((task) => {
      expect(task).toBeInTheDocument();
      expect(listTask.includes(task)).toBeTruthy();
    });
  });

  test('Teste string no Item para ele aparecer na tela.', () => {
    render(<Item content="XABLAU" />);

    const task = screen.getByText('XABLAU');
    expect(task).toBeInTheDocument();
  })
});

describe('EX03 - Criar novas funcionalidades', () => {
  test('Adicionar funcionalidade de selecionar uma task', () => {
    
  })
})
