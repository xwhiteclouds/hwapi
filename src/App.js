import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux'
import { getPosts, getUsers, getTodos, getComments } from './redux/actions';
import PostsComponent from './components/posts'
import UsersComponent from './components/users'
import TodosComponent from './components/todos'
import CommentsComponent from './components/comments'
import Button from '@material-ui/core/Button';

import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

const App = () => {

    const dispatch = useDispatch();
    const {
      Posts,
      Users,
      Todos,
      Comments
    } = useSelector(state => state);
  
    useEffect(() => {
      dispatch(getPosts())
      dispatch(getUsers())
      dispatch(getTodos())
      dispatch(getComments())

    }, [])


  
    return(
        <div >
       <Router >
        <Link style={{textDecoration: 'none'}} to='/'><Button style={{background: '#D8D4F2', marginLeft: '20px'}}>users</Button></Link>
        <Link style={{textDecoration: 'none'}}to='/posts'><Button style={{background: '#D8D4F2', marginLeft: '20px'}}>posts</Button></Link>
        <Link style={{textDecoration: 'none'}} to='/comments'><Button style={{background: '#D8D4F2', marginLeft: '20px'}}>comments</Button></Link>
        <Link style={{textDecoration: 'none'}} to='/todos'><Button style={{background: '#D8D4F2', marginLeft: '20px'}}>to do</Button></Link>

        <Route path='/posts'>
            { Posts.length > 0 && (
            Posts.map(item => {
                return(
                <PostsComponent
                    key={item.id}
                    title={item.title}
                    body={item.body}
                />
                )
            })
            ) }
        </Route>
        <Route path="/" exact>
            {
                Users.length > 0 && (
                    Users.map(item => {
                        return (
                            <UsersComponent 
                                name={item.name} 
                                email={item.email}  
                                gender={item.gender} 
                                status={item.satus}
                            />
                        )
                    })
                )
            }
        </Route>
        {/* <Route path="/todos">
            {
                Todos.length > 0 && (
                    Todos.map(item => {
                        return (
                            <TodosComponent 
                                title={item.title} 
                                completed={item.completed}  
                            />
                        )
                    })
                )
            }
        </Route> */}
        {/* <Route path="/comments">
            {
                Comments.length > 0 && (
                    Comments.map(item => {
                        return (
                            <CommentsComponent 
                                title={item.title} 
                                completed={item.completed}  
                            />
                        )
                    })
                )
            }
        </Route> */}
      </Router>
      </div>
    )
  }
  
  export default App;