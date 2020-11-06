import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useState } from 'react';

const FormBorderDiv = styled.div`
  background: #fad312;
  width: 100%;
  height: 10px;
  overflow: hidden;
`
const FormWrapper = styled.form`
  overflow: auto;
  width: 50%;
  margin: 0 auto;
  margin-top: 120px;
  margin-bottom: 120px;
  border-radius: 8px;
  box-shadow: 1.8px 2.4px 5px 0px rgba(0, 0, 0, 0.3);
`
const Wrapper = styled.div`
  padding: 54px 40px;
  background: white;
`
const FormTitle = styled.h1`
  font-size: 36px;
  color: black;
  font-weight: bold;
  margin-bottom: 35px;
`
const FormDesc = styled.p`
  font-size: ${props => props.remind ? "16px" : "14px"};
  color: ${props => props.remind ? "#e74149" : "black"};
  line-height: 2em;
  font-weight: bold;
`
const  FormQuestion = styled.div`
  color: black;
  font-weight: 550;
  font-size: 20px;
  margin: 55px 0 20px 0;
  margin-right: 15px;

  & > div {
    margin-top: 12px;
    color: black;
    font-size: 14px;
  }

  ${props => props.isRequired && `
    &::after {
      content: "*";
      color: #e74149;
    }`
  }
`
const FormInput = styled.input`
  box-sizing: border-box;
  font-size: 16px;
  width: 300px;
  border: 0px;
  color: #414141;
  border-bottom: #afafaf 1px solid;
  padding-bottom: 5px;
  outline-color: transparent;
  transition: ease-out .2s all;

  &::placeholder {
    color: #afafaf;
  }

  &:focus {
    border-bottom: #fad312 3px solid;
  }
`
const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: middle;

  div {
    padding: 10px 0px;
  }
`
const ButtonSubmit = styled.button`
  margin: 55px 0 20px 0;
  display: block;
  background: #fad312;
  font-size: 16px;
  padding: 13px 30px;
  border:none;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;
  transition: ease-in all .2s;

  &:focus {
    border: none;
    outline: none;
  }

  &:hover {
    background: #fada3c;
    transform: scale(1.05);
  }
`

function RadioItem({name, id, value, type, handleChange}) {
  return (
    <div>
      <label><input type="radio" id={id} name={name} data-value={value} checked={type === Number(id)} onChange={handleChange}/>{value}</label>
    </div>
  )
}
function FormInputItem({question, isRequired, type, value, handleInputChange}) {
  return (
    <section>
      <FormQuestion isRequired={isRequired}>{question}</FormQuestion>
      <FormInput type={type} placeholder="您的回答" value={value} onChange={handleInputChange}/>
    </section>
  )
}
function FormRadioItem({name, type, handleChoicesChange}) {
  return (
    <RadioGroup>
      <RadioItem name={name} id="1" value="躺在床上用想像力實作" type={type} handleChange={handleChoicesChange}/>
      <RadioItem name={name} id="2" value="趴在地上滑手機找現成的" type={type} handleChange={handleChoicesChange}/>
    </RadioGroup>
  )
}


function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    choices: 1,
    intro: "",
    advice: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleNameChange = (e) => {
      setFormData({
        ...formData,
        name: e.target.value
      });
  }

  const handleEmailChange = (e) => {
    setFormData({
      ...formData,
      email: e.target.value
    });
  }

  const handlePhoneChange = (e) => {
    setFormData({
      ...formData,
      phone: e.target.value
    });
  }

  const handleChoicesChange = (e) => {
    setFormData({
      ...formData,
      choices: Number(e.target.id)
    });
  }

  const handleIntroChange = (e) => {
    setFormData({
      ...formData,
      intro: e.target.value
    });
  }

  const handleAdviceChange = (e) => {
    setFormData({
      ...formData,
      advice: e.target.value
    });
  }

  return (
    <div className="App">
      <FormWrapper onSubmit={handleSubmit}>
        <FormBorderDiv/>
        <Wrapper>
          <FormTitle>新拖延運動報名表單</FormTitle>
          <FormDesc>活動日期：2020/12/10 ~ 2020/12/11</FormDesc>
          <FormDesc>活動地點：台北市大安區新生南路二段1號</FormDesc>
          <FormDesc remind>*必填</FormDesc>
          <FormInputItem question="暱稱" isRequired type="text"  handleInputChange={handleNameChange} />
          <FormInputItem question="電子郵件" isRequired type="email" handleInputChange={handleEmailChange}/>
          <FormInputItem question="手機號碼" isRequired type="number" handleInputChange={handlePhoneChange}/>
          <FormQuestion isRequired>報名類型</FormQuestion>
          <FormRadioItem name="choices" type={formData.choices} handleChoicesChange={handleChoicesChange}/>
          <FormInputItem question="怎麼知道這個活動的？" isRequired type="text" handleInputChange={handleIntroChange}/>
          <FormInputItem question="其他對活動的一些建議" type="text" handleInputChange={handleAdviceChange}/>
          <ButtonSubmit >提交</ButtonSubmit>
          <FormDesc remind>*請勿透過表單送出您的密碼</FormDesc>
        </Wrapper>
      </FormWrapper>
    </div>
  );
}

export default App;
