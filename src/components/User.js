import React, { Component,Fragment } from 'react'
import Spinner from './layout/Spinner'
import Repos from './layout/Repos'
import {Link} from 'react-router-dom'
class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
        this.props.getUserRepos(this.props.match.params.login)
    }

    static defaultProps={
        user:{
            "login": "brad",
            "id": 1614,
            "avatar_url": "https://avatars.githubusercontent.com/u/1614?v=4",
            "html_url": "https://github.com/brad",
            "blog": "https://brad.github.io",
            "location": "Nomadic (USA)",
            "company": "GlobalMed",
            "hireable": null,
            "bio": "Juggler with a penchant for software development",
            "public_repos": 205,
            "public_gists": 3,
            "followers": 66,
            "following": 58
          }
    }


    render() {
        const{
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
            company
        }=this.props.user
        

        const {loading,repos} = this.props

        if(!loading){
            return <Spinner/>
        }else{
            return (
                <Fragment>
                    <Link to='/' className="btn btn-light">
                        Back to Search
                    </Link>
                    Hireable:{''}
                    {hireable ? <i className="fas fa-check text-success"/> : <i className="fas fa-times-circle text-danger"/>}
                    <div className="card grid-2">
                        <div className="all-center">
                            <img src={avatar_url} alt='img' className="round-img" style={{width:'150px'}}/>
                            <h1>{name}</h1>
                            <p>Location:{location}</p>
                        </div>
                        <div>
                            {bio && <Fragment>
                                    <h3>Bio</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            }
                            <a href={html_url} className="btn btn-dark my-1">Visit Github profile</a>
                        </div>
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>Username: </strong>{login}
                                </Fragment> }
                            </li>
                            <li>
                                {company && <Fragment>
                                    <strong>Company: </strong>{company}
                                </Fragment> }
                            </li>
                            <li>
                                {blog && <Fragment>
                                    <strong>Website: </strong>{blog}
                                </Fragment> }
                            </li>
                        </ul>
                    </div>
                    <div className="card text-center">
                        <div className="badge badge-primary">
                            Followers: {followers}
                        </div>
                        <div className="badge badge-success">
                            Following: {following}
                        </div>
                        <div className="badge badge-light">
                            Public Repos: {public_repos}
                        </div>
                        <div className="badge badge-dark">
                            Public Gists: {public_gists}
                        </div>
                    </div>
                    <Repos repos= {repos}/>
                </Fragment>
            )
        }     
    }
}

export default User
