import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,

} from "react-router-dom";
import styled from 'styled-components';

const Wrapper=styled.div`
border: 1px solid red;
height: 100vh;
display: flex;
flex-direction:column ;

`


const Main=styled.div`
border: 1px solid black;
flex-grow: 1;
overflow:auto;
`
const Nav=styled.div`
border: 1px solid black;
>ul{
display:flex;
>li{
width: 33.3333333%;
text-align: center;
padding: 16px;
}
}

`



 function App() {

   return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Redirect exact from="/" to="/money" />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Main>
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/money">记账</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Router>
  );
}

function NoMatch() {
  return <h2>页面不存在，地址有误</h2>;
}
function Statistics() {
  return <h2>我是统计</h2>;
}

function Tags() {
  return <h2>我是标签</h2>;
}

function Money() {
  return <h2>我是记账</h2>;
}
export default  App;