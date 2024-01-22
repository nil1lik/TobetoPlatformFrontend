import axios from "axios"

export default class SkillService{
  getSkill(){
    return axios.get("http://localhost:5278/api/Skills")
  }
}