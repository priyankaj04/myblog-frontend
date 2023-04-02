//User apis : getUserDetailsById, LoginUser, createNewUser, UpdateUserById, deleteUserById
//Blog apis : getAllBlogs, getAllBlogsByUserId, getBlogDetailsByBlogId, getBlogByCategory, getCommentsByBlogId, 
//            CreateNewBlog, CreateNewCommentByBlogId, 
//            UpdateBlogByBlogId, UpdateCommentByCommentId, 
//            DeleteBlogByBlogid, deleteCommentByCommentid


//get user details by id
export const getUserDetailsById = (id) => {

    const JWT = sessionStorage.getItem('token')
    const url = process.env.REACT_APP_APIURL + 'user/' + id;
    const fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + JWT,
        }
    };

    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log('error', error)
            return { status: 0, msg: error.message }
        });
}

//login - email, password
export const LoginUser = (reqbody) => {

    let url = process.env.REACT_APP_APIURL + 'user/login';

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reqbody)
    };

    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            return { status: 0, msg: error.message }
        });
}

//register- username, email, password
export const createNewUser = (reqbody) => {

    let url = process.env.REACT_APP_APIURL + 'user/create'

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reqbody)
    }

    return fetch(url, fetchOptions)
        .then((res) => res.json())
        .catch((error) => {
            return { status: 0, msg: error.message }
        });
}

//update user by id - name, password, image, bio
export const UpdateUserById = (reqbody, id) => {

    const JWT = sessionStorage.getItem('token')
    const url = process.env.REACT_APP_APIURL + 'user/' + id;

    const fetchOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + JWT,
        },
        body: JSON.stringify(reqbody)
    };

    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log('error', error)
            return { status: 0, msg: error.message }
        });
}

//Delete User from id
export const deleteUserById = (id) => {

    const JWT = sessionStorage.getItem('token')
    const url = process.env.REACT_APP_APIURL + 'user/' + id;

    const fetchOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + JWT,
        }
    };

    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log('error', error)
            return { status: 0, msg: error.message }
        });
}


//get all blogs
export const getAllBlogs = () => {

    const url = process.env.REACT_APP_APIURL + '/blog';
    const fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    };

    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log('error', error)
            return { status: 0, msg: error.message }
        });
}


//get all blogs by userid
export const getAllBlogsByUserId = (userid) => {

    const JWT = sessionStorage.getItem('token')
    const url = process.env.REACT_APP_APIURL + 'blogs/' + userid;
    const fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + JWT,
        }
    };

    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log('error', error)
            return { status: 0, msg: error.message }
        });
}

//get blog details by blogid
export const getBlogDetailsByBlogId = (blogid) => {

    const JWT = sessionStorage.getItem('token')
    const url = process.env.REACT_APP_APIURL + 'blogs/' + blogid;
    const fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + JWT,
        }
    };

    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log('error', error)
            return { status: 0, msg: error.message }
        });
}


//get blogs on category
export const getBlogByCategory = (category) => {

    const url = process.env.REACT_APP_APIURL + 'blogs/category/' + category;
    const fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    };

    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log('error', error)
            return { status: 0, msg: error.message }
        });
}

//get all comments related to that blog
export const getCommentsByBlogId = (blogid) => {

    const JWT = sessionStorage.getItem('token')
    const url = process.env.REACT_APP_APIURL + 'blogs/comment/' + blogid;
    const fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + JWT,
        }
    };

    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log('error', error)
            return { status: 0, msg: error.message }
        });
}

//create blog - title, description, categories, authorid, image
export const CreateNewBlog = (reqbody) => {

    const JWT = sessionStorage.getItem('token')
    let url = process.env.REACT_APP_APIURL + 'blogs/create';

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + JWT,
        },
        body: JSON.stringify(reqbody)
    };

    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log('error', error)
            return { status: 0, msg: error.message }
        });
}

//create comment for blog by blogid - name, description, image email
export const CreateNewCommentByBlogId = (reqbody, blogid) => {

    const JWT = sessionStorage.getItem('token')
    let url = process.env.REACT_APP_APIURL + 'blogs/comment/' + blogid;

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + JWT,
        },
        body: JSON.stringify(reqbody)
    };

    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log('error', error)
            return { status: 0, msg: error.message }
        });
}

//Update blog details by blogid
export const UpdateBlogByBlogId = (reqbody, blogid) => {

    const JWT = sessionStorage.getItem('token')
    let url = process.env.REACT_APP_APIURL + 'blogs/' + blogid;

    const fetchOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + JWT,
        },
        body: JSON.stringify(reqbody)
    };

    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log('error', error)
            return { status: 0, msg: error.message }
        });
}

//Update blog details by blogid 
export const UpdateCommentByCommentId = (reqbody, commentid) => {

    const JWT = sessionStorage.getItem('token')
    let url = process.env.REACT_APP_APIURL + 'blogs/comment/' + commentid;

    const fetchOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + JWT,
        },
        body: JSON.stringify(reqbody)
    };

    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log('error', error)
            return { status: 0, msg: error.message }
        });
}

//delete blog post by blogid
export const DeleteBlogByBlogid = (id) => {

    const JWT = sessionStorage.getItem('token')
    const url = process.env.REACT_APP_APIURL + 'blogs/' + id;

    const fetchOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + JWT,
        }
    };

    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log('error', error)
            return { status: 0, msg: error.message }
        });
}

//delete Comment by comment id
export const deleteCommentByCommentid = (commentid) => {

    const JWT = sessionStorage.getItem('token')
    const url = process.env.REACT_APP_APIURL + 'blogs/comment/' + commentid;

    const fetchOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + JWT,
        }
    };

    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log('error', error)
            return { status: 0, msg: error.message }
        });
}