
export const progressService = {
    KEYS: {
        ENROLLED: 'omnitech_enrolled',
        PROGRESS: 'omnitech_progress',
    },

    _getRawProgress() {
        const data = localStorage.getItem(this.KEYS.PROGRESS);
        return data ? JSON.parse(data) : {};
    },

    saveLessonActivity(courseId, lessonId, grade = null) {
        const allProgress = this._getRawProgress();

        if (!allProgress[courseId]) {
            allProgress[courseId] = { 
                completed: [], 
                grades: {} 
            };
        }

        if (grade !== null) {

            allProgress[courseId].grades[lessonId] = grade;

            if (grade >= 70) {

                if (!allProgress[courseId].completed.includes(lessonId)) {
                    allProgress[courseId].completed.push(lessonId);
                }
            } else {
                allProgress[courseId].completed = allProgress[courseId].completed.filter(
                    id => id !== lessonId
                );
            }
        } else {

            if (!allProgress[courseId].completed.includes(lessonId)) {
                allProgress[courseId].completed.push(lessonId);
            }
        }

        localStorage.setItem(this.KEYS.PROGRESS, JSON.stringify(allProgress));
    },

    isLessonCompleted(courseId, lessonId) {
        const progress = this._getRawProgress();
        return progress[courseId]?.completed.includes(lessonId) || false;
    },

    getLessonGrade(courseId, lessonId) {
        const progress = this._getRawProgress();
        return progress[courseId]?.grades[lessonId] ?? null;
    },

    getCoursePercentage(courseId, totalLessons) {
        const progress = this._getRawProgress();
        const completedCount = progress[courseId]?.completed.length || 0;
        
        if (totalLessons === 0) return 0;
        
        const percentage = Math.round((completedCount / totalLessons) * 100);
        return percentage > 100 ? 100 : percentage;
    },

    deleteCourseData(courseId) {
        const enrolled = JSON.parse(localStorage.getItem(this.KEYS.ENROLLED)) || [];
        const newEnrolled = enrolled.filter(id => id !== courseId);
        localStorage.setItem(this.KEYS.ENROLLED, JSON.stringify(newEnrolled));

        const allProgress = this._getRawProgress();
        if (allProgress[courseId]) {
            delete allProgress[courseId];
            localStorage.setItem(this.KEYS.PROGRESS, JSON.stringify(allProgress));
        }
    }
};