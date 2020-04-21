import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/27022914?s=460&u=8beafca4ba6994b2c6fc1012008a8b0c007380d9&v=4"
            alt="Henrique Tavares"
          />
          <div>
            <strong>tavareshenrique/fastfeet</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              eos?
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/27022914?s=460&u=8beafca4ba6994b2c6fc1012008a8b0c007380d9&v=4"
            alt="Henrique Tavares"
          />
          <div>
            <strong>tavareshenrique/fastfeet</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              eos?
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/27022914?s=460&u=8beafca4ba6994b2c6fc1012008a8b0c007380d9&v=4"
            alt="Henrique Tavares"
          />
          <div>
            <strong>tavareshenrique/fastfeet</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              eos?
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
