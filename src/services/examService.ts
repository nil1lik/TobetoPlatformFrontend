import axios from 'axios';

import { getExam } from './../models/requests/exam/getExam';
export default class ExamService {
    getExam(){
        return axios.get("http://localhost:5278/api/Exams?PageIndex=0&PageSize=1")
    }
};