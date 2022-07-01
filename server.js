const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;
const modles = require('./models');

//json 형식의 데이터를 처리할 수 있게 설정하기
app.use(express.json());
//브라우저 cors이슈를 막기위해 사용(모든 브라우저의 요청을 일정하게 받겠다)
app.use(cors());

//요청처리
//app.메서드(경로,응답(콜백함수로 작성))
app.get('/products',async(req,res)=>{
   
    //데이터베이스 조회하기
    modles.Product.findAll()
    .then(result=>{
        console.log("제품전체조회",result);
        res.send(result);
    })
    .catch(e=>{
        console.error(e)
        res.send("파일조회에 문제가 있습니다.")
    })

    
})
//method get전송이고, url은 /product/2 로 요청이 왔을때
app.get('/product/:id', async (req,res)=>{ //id를 파라미터 방식으로 받겠다.
    console.log(req);
    const params = req.params;
    const {id} = params;
    //하나만 조회할때 findOne --> select문
    modles.Product.findOne({
        //조건절
        where:{
            id:id
        }
    })
    .then(result=>{
        res.send(result);
    })
    .catch(e=>{
        console.error(e)
        res.send("상품조회에 문제가 생겼습니다.")
    })
        
}) 
app.post('/green',async(req,res)=>{
    console.log(req);
    res.send('그린게시판에 게시글이 등록되었습니다.');
});

//실행
app.listen(port,()=>{
    console.log('쇼핑몰 서버가 동작중입니다.');
    //sequelize와 데이터베이스 연결 작업
    //데이터베이스 동기화
    modles.sequelize
    .sync()
    .then(()=>{
        console.log('db연결 성공~~~~~');
    })
    .catch(e=>{
        console.error(e);
        console.log('db연결 에러');
        //서버실행이 안되면 프로세스를 종료
        process.exit();  
    })
})