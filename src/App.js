import logo from './logo.svg';
import './App.css';






function Article(props){
  return <article>
            <h2>{props.title}</h2>
                {props.body}
        </article>

}
//사용자 정의 태그 = 컴포넌트
function Header(props){ //react에서는 반드시 컴포넌트는 대문자 시작
  console.log('props',props, props.title);
  return <header>
          <h1><a href="/" onClick={(event)=>{
            event.preventDefault(); //기본동작 방지.. 클릭해도 리로드가 일어나지 않음
            props.onChangeMode(); //태그의 함수가 실행됨
          }}>{props.title}</a></h1>
        </header>

}

function Nav(props){
  const lis = [];
  
  //react의 경우 자동으로 생성한 코드의 경우 고유의 key prop을 부여해야 함 > 성능을 높이고 정확한 동작을 하기 위함
  for (let i=0; i<props.topics.length;i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id); //target = 이벤트를 유발시킨 태그를 의미
      
    }} 
      href={'/read/'+t.id}>{t.title}</a></li>);
  }
  return <nav>
  <ol>
    {lis}
  </ol> 
</nav>
}
function App() {
  const topics = [
    {id:1,title:'html',body:'html is...'},
    {id:2,title:'css',body:'css is...'},
    {id:3,title:'javascript',body:'javascript is...'}
  ];
  return (
    <div>
        <Header title="WEB" onChangeMode={()=>{
          alert('Header');
        }}></Header> 
        <Nav topics={topics} onChangeMode={(id)=>{
          alert(id);
        }}></Nav>
        <Article title="Welcome" body="Hello, WEB"></Article>
        
    </div>
  
  );
}

export default App;
