import "./App.css";
import { useState } from "react";
import {
  FormBorderDiv,
  FormWrapper,
  Wrapper,
  FormTitle,
  FormDesc,
  FormQuestion,
  ButtonSubmit,
  FormInputItem,
  FormRadioItem,
} from "./FormItems";

function App() {
  const [validState, setValidState] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    choices: 1,
    intro: "",
    advice: "",
  });

  function isNotBlank(str) {
    return str.length !== 0;
  }

  function isNumber(str) {
    return /^[0-9]+$/.test(str);
  }

  function validateEmail(str) {
    return /\S+@\S+\.\S+/.test(str);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidState(true);

    if (
      isNotBlank(formData.name) &&
      validateEmail(formData.email) &&
      isNumber(formData.phone) &&
      isNotBlank(formData.intro)
    ) {
      alert("已收到報名資訊，感動您的參與!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        choices: 1,
        intro: "",
        advice: "",
      });
      setValidState(false);
    }

    console.log("formData", formData);
  };

  const handleNameChange = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    setFormData({
      ...formData,
      phone: e.target.value,
    });
  };

  const handleChoicesChange = (e) => {
    setFormData({
      ...formData,
      choices: Number(e.target.id),
    });
  };

  const handleIntroChange = (e) => {
    setFormData({
      ...formData,
      intro: e.target.value,
    });
  };

  const handleAdviceChange = (e) => {
    setFormData({
      ...formData,
      advice: e.target.value,
    });
  };

  return (
    <div className="App">
      <FormWrapper onSubmit={handleSubmit}>
        <FormBorderDiv />
        <Wrapper>
          <FormTitle>新拖延運動報名表單</FormTitle>
          <FormDesc>活動日期：2020/12/10 ~ 2020/12/11</FormDesc>
          <FormDesc>活動地點：台北市大安區新生南路二段1號</FormDesc>
          <FormDesc remind>*必填</FormDesc>
          <FormInputItem
            question="暱稱"
            isRequired={true}
            type="text"
            value={formData.name}
            handleInputChange={handleNameChange}
            setRemind={validState && !isNotBlank(formData.name)}
          />
          <FormInputItem
            question="電子郵件"
            isRequired={true}
            type="email"
            value={formData.email}
            handleInputChange={handleEmailChange}
            setRemind={validState && !validateEmail(formData.email)}
          />
          <FormInputItem
            question="手機號碼"
            isRequired={true}
            type="number"
            value={formData.phone}
            handleInputChange={handlePhoneChange}
            setRemind={validState && !isNumber(formData.phone)}
          />
          <FormQuestion isRequired={true}>報名類型</FormQuestion>
          <FormRadioItem
            name="choices"
            type={formData.choices}
            handleChoicesChange={handleChoicesChange}
          />
          <FormInputItem
            question="怎麼知道這個活動的？"
            isRequired={true}
            value={formData.intro}
            type="text"
            handleInputChange={handleIntroChange}
            setRemind={validState && !isNotBlank(formData.intro)}
          />
          <FormInputItem
            question="其他對活動的一些建議"
            type="text"
            value={formData.advice}
            handleInputChange={handleAdviceChange}
          />
          <ButtonSubmit>提交</ButtonSubmit>
          <FormDesc remind>*請勿透過表單送出您的密碼</FormDesc>
        </Wrapper>
      </FormWrapper>
    </div>
  );
}

export default App;
