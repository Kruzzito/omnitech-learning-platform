
class CourseService {
    constructor() {
this.activeIds = [
    'CUEXESNIBA01', // Excel
    'CUWOBANIBA02', // Word

];
    }

    getAllCourses() {
        const allData = window.coursesMock || [];
        return allData.filter(course => this.activeIds.includes(course.id));
    }

    getCourseById(id) {
        const allData = window.coursesMock || [];
        return allData.find(course => course.id === id);
    }

    getLesson(courseId, lessonId) {
        const course = this.getCourseById(courseId);
        if (!course) return null;

        for (const module of course.modules) {
            const lesson = module.lessons.find(l => l.lessonId === lessonId);
            if (lesson) return lesson;
        }
        return null;
    }
}

export const courseService = new CourseService();