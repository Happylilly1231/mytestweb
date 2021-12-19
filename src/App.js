import React from 'react';
import {Button, Input, Header} from 'semantic-ui-react';

function App() {
  return (
<div>
<br/>
<Header as='h1' textAlign='center'>대사성 질환 위험도 측정 웹</Header>
<br/>
<Button.Group size='large'>
    <Button>남성</Button>
    <Button.Or />
    <Button>여성</Button>
  </Button.Group>
<br/>
<br/>
<Input label="허리 둘레" placeholder='단위 : cm'/>
<br/>
<br/>
<Input label="중성 지방" placeholder='단위 : mg/dL'/>
<br/>
<br/>
<Input label="고밀도 지방(HDL 콜레스테롤)" placeholder='단위 : mg/dL'/>
<br/>
<br/>
<Input label="수축기 혈압" placeholder='단위 : mmHg'/>
<br/>
<br/>
<Input label="이완기 혈압" placeholder='단위 : mmHg'/>
<br/>
<br/>
<Input label="공복 혈당" placeholder='단위 : mg/dL'/>
<br/>
<br/>
<Button secondary>입력 완료</Button>
</div>
  );
}

export default App;
