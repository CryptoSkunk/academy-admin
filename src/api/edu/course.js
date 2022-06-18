import request from '@/utils/request'

export default {
    //1.添加课程信息
    addCourseInfo(courseInfo) {
        return request({
            url: `/eduservice/course/addCourseInfo`,
            method: 'post',
            data: courseInfo
        })
    },
    //2.查询所有的讲师
    getListTeacher() {
        return request({
            url: `/eduservice/teacher/findAll`,
            method: 'get'
        })
    },
    //根据课程id查询课程基本信息
    getCourseInfoId(id) {
        return request({
            url: `/eduservice/course/getCourseInfo/${id}`,
            method: 'get'
        })
    },
    //修改课程信息
    updateCourseInfo(courseInfo) {
        return request({
            url: '/eduservice/course/updateCourseInfo',
            method: 'post',
            data: courseInfo
        })
    },
    //课程确认信息显示
    getPublihCourseInfo(id) {
        return request({
            url: `/eduservice/course/getPublishCourseInfo/${id}`,
            method: 'get'
        })
    },
    //课程最终发布
    publihCourse(id) {
        return request({
            url: `/eduservice/course/publishCourse/${id}`,
            method: 'post'
        })
    },
    //课程列表
    getListCourse() {
        return request({
            url: '/eduservice/course/getCourseList',
            method: 'get'
        })
    },
    //课程列表多条件分页查询
    getCourseListOnCondition(current, size, courseQuery) {
        return request({
            url: `/eduservice/course/getCourseListOnCondition/${current}/${size}`,
            method: 'post',
            data: courseQuery
        })
    },
    //根据课程id删除课程信息  /removeCourseById/{id}
    removeCourseById(id) {
        return request({
            url: `/eduservice/course/removeCourseById/${id}`,
            method: 'get',
        })
    }
}