import Mock from 'mockjs'


export default Mock.mock('/postdata1','post',{
    success: true,
    message: '@cparagraph',
 

    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'list|1-5': [{
        // 属性 sid 是一个自增数，起始值为 1，每次增 1
        'sid|+1': 1,
        'id': '@id',
        'name': '@cname',
        "date": "@date()",//随机生成日期
        // 属性 userId 是一个5位的随机码
        'Address': '@county(true)', //随机地址
        'userId|5': '',
    }]
})
export const obj= Mock.mock('/postdata2','post',{
    success: true,
    message: '@cparagraph',
 

    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'list|1-5': [{
        // 属性 sid 是一个自增数，起始值为 1，每次增 1
        'sid|+1': 1,
        'id': '@id',
        'name': '@cname',
        "date": "@date()",//随机生成日期
        // 属性 userId 是一个5位的随机码
        'Address': '@county(true)', //随机地址
        'userId|5': '',
    }]
})
 
