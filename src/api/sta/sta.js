import request from '@/utils/request'

export default {
    //1.生成统计数据
    createStaData(day) {
        return request({
            url: `/staservice/sta/countRegister/${day}`,
            method: 'get',
        })
    },
    //2.获取统计数据
    getShowData(searchObj) {
        return request({
            url: `/staservice/sta/getShowData/${searchObj.type}/${searchObj.begin}/${searchObj.end}`,
            method: 'get',
        })
    }
}