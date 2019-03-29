import React, { Component } from 'react';
import styled from 'styled-components';
import { eval as MathEval } from 'mathjs';

import { GlobalStyle } from './global-styles';

import Brand from './components/brand';
import Screen from './components/screen';
import Button from './components/button';

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background: #1795d4;
  padding: 10px;
`;

const Pad = styled.div`
  display: flex;
`;

const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: 20px;
`;

export const Number = styled(Button)`
  width: calc(33% - 5px);
`;

const Operators = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
  }

  clearInputValue = () => this.setState({ input: '' });
  setInputValue = (val) => this.setState({ input: `${this.state.input}${val}` });
  calculate = () => this.setState({ input: MathEval(this.state.input).toString() });

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <Screen value={this.state.input} />
        <Brand>
          <Button value="C" handleClick={this.clearInputValue} />
        </Brand>
        <Pad>
          <Numbers>
            {['1','2','3','4','5','6','7','8','9', '0', '.'].map(val =>
              <Number value={val} handleClick={this.setInputValue} key={val} />
            )}
            <Number value={'='} handleClick={this.calculate} />
          </Numbers>
          <Operators>
              <Button value="/" label="÷" handleClick={this.setInputValue} />
              <Button value="*" label="x" handleClick={this.setInputValue} />
              <Button value="-" handleClick={this.setInputValue} />
              <Button value= "+" handleClick={this.setInputValue} />
          </Operators>
        </Pad>
      </Wrapper>
    );
  }
}

export default App;
