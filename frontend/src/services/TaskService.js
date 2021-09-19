import axios from "axios";
const Url="http://localhost:8000/todo/";


export function getTodo(){
    return axios.get(Url);
}

export function addTodo(todo){
    return axios.post(Url,todo);
}

export function updateTodo(id,todo){
    return axios.put(Url + "/" +id ,todo);
}
export function deleteTodo(id){
    return axios.delete(Url + "/" + id);
}