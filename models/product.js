//commonjs 구문 내보내기
//module.exports
//테이블을 모델링하는 파일
module.exports = function(sequelize,DataTypes){
    //컬럼 name,price,imageUrl,seller
    //제약조건 allowNull : 컬럼의 값이 없어도 되는지 여부(defalut : true)
    const product = sequelize.define('Product',{
        name:{
            type:DataTypes.STRING(200),
            allowNull : false
        },
        price:{
            type:DataTypes.INTEGER(10),
            allowNull : false
        },
        imgsrc:{
            type:DataTypes.STRING(500),
        },
        seller:{
            type:DataTypes.STRING(200),
            allowNull : false
        },
        desc:{
            type:DataTypes.STRING(500),
            allowNull: false
        }
    }); 
       
    return product;
}