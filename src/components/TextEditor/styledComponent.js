import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 0px;
  margin-right: 15px;
  cursor: pointer;
  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
`
export const EditText = styled.textarea`
  font-family: 'roboto';
  background-color: #25262c;
  border: 1px solid #334155;
  outline: none;

  color: #f8fafc;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  font-weight: ${prop => (prop.bold === true ? 'bold' : 'normal')};
  font-style: ${prop => (prop.italic === true ? 'italic' : 'normal')};
  text-decoration: ${prop =>
    prop.underline === true ? 'underline' : 'normal'};
`
