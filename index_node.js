//node는 CommonJS 문법을 사용
//import -> require()
const http = require ('http');

//본인 컴퓨터의 주소를 의미함(127.0.0.1)
const hostname = "127.0.0.1";
const port = 8080;

//서버만들기 createServer(function(request,response))
const server = http.createServer(function(req,res){
    //요청정보 req : 웹브라우저가 요청한 정보를 담음
    //응답 res : 결과를 보여줌
    const path = req.url;
    const method = req.method;
    if(path === "/products"){
        if(method === "GET"){
            //응답을 보낼때 컨텐츠 타입을 제이슨 객체를 헤더에 보낸다.
            res.writeHead(200,{'Content-Type':'application/json'})
            //js배열을 JSON타입으로 변경해서 변수에 담기
            const products = JSON.stringify([
                    {
                        name:"거실조명",
                        price: 50000,
                    },
                    {
                        name:"어린이조명",
                        price: 50000,

                    }
                ]);
            res.end(products);
            
        }
    }
    
})

//listen은 대기 호스트네임과 포트번호로 요청을 기다림
server.listen(port,hostname);
console.log('조명쇼핑몰 서버가 돌아가고 있습니다');