import Mock from 'mockjs'
// import data from './data.json'

let Random = Mock.Random;
let productData = () => {
    let productList = []; // 存放农机信息的数组
    for(let i=0; i<100; i++){
        let product = {
            name: Random.ctitle(5, 20),
            img: Random.dataImage('125x125', '农机' + Random.integer(1, 100)),
            price: Random.integer(1000, 10000),
            owner: Random.cname()
        };
        productList.push(product);
    }
    return productList;
};
Mock.mock('http://www.jww23.cn/getVarietyItem', productData);