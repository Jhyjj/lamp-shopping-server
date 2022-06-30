const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;

//json 형식의 데이터를 처리할 수 있게 설정하기
app.use(express.json());
//브라우저 cors이슈를 막기위해 사용(모든 브라우저의 요청을 일정하게 받겠다)
app.use(cors());

//요청처리
//app.메서드(경로,응답(콜백함수로 작성))
app.get('/products',async(req,res)=>{
    const result = {
        products: [
            {
                id: 1,
                name: "진짜 밝은 거실조명",
                price : 55000,
                imgsrc:"images/products/product1.jpg",
                seller : "green"
            },
            {
                id:2,
                name: "그저 그런 화장실 조명",
                price: 45000,
                imgsrc:"images/products/product2.jpg",
                seller : "green"
            },
            {
                id:3,
                name: "부엌 조명",
                price: 45000,
                imgsrc:"images/products/product3.jpg",
                seller : "green"
            },
            {
                id:4,
                name: "거실 간접등",
                price: 45000,
                imgsrc:"images/products/product4.jpg",
                seller : "green"
            },
            {
                id:5,
                name: "현관 조명",
                price: 45000,
                imgsrc:"images/products/product4.jpg",
                seller : "green"
            },
            {
                id:6,
                name: "베란다 간접등",
                price: 45000,
                imgsrc:"images/products/product3.jpg",
                seller : "green"
            },
            {
                id:7,
                name: "안방 스탠드",
                price: 45000,
                imgsrc:"images/products/product2.jpg",
                seller : "green"
            },
            {
                id:8,
                name: "독서등",
                price: 45000,
                imgsrc:"images/products/product1.jpg",
                seller : "green"
            }
        ]
    }
    res.send(result);
})
app.post('/green',async(req,res)=>{
    console.log(req);
    res.send('그린게시판에 게시글이 등록되었습니다.');
});

//실행
app.listen(port,()=>{
    console.log('쇼핑몰 서버가 동작중입니다.');
})