/* eslint-disable no-async-promise-executor */
/* eslint-disable no-unused-vars */
import axios from "axios"

const url = 'http://localhost:5000/api/posts/'

class PostService {
    // GET POSTS
    static getPosts(){
        return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.get(url)
            const data = res.data
            resolve(
                data.map(post => ({
                ...post,
                createdAt: new Date(post.createdAt)
                }))
            );
        } catch (error) {
            reject(error)
        }
    })
    }

    // CREATE POST
    static insertPost(text) {
        return axios.post(url, {
            text
        })
    }

    // DELETE POST
    static deletePost(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default PostService