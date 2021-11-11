import {useEffect, useState, useRef} from 'react';
import Table from 'react-bootstrap/Table'

const Post = props => {
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?userId=" + props.userId)
        .then((response)=> {
            return response.json()
        }).then((response) => {
            setPost(response)
        })
    }, []);

    if (post !== []) {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        post.map((singlePost) => {
                            return (
                                <tr>
                                    <td>{singlePost.id}</td>
                                    <td>{singlePost.title}</td>
                                    <td>{singlePost.body}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        )
    } else {
        return (
            <tr>
                <td>...</td>
                <td>...</td>
                <td>...</td>
            </tr>
        )
    }
}

export default Post;