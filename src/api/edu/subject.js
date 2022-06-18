import request from '@/utils/request'

export default {
    //1.课程分类管理 树型展示
    getSubjectList(current, limit, teacherQuery) {
        return request({
            url: `/eduservice/subject/getAllSubject`,
            method: 'get',
        })
    }
}