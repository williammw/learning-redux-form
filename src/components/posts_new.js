import React from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions';

class PostsNew extends React.Component {
  
  render() {
    const {fields:{title,categories,content},handleSubmit} = this.props;
  //  const title = this.props.fields.title;
    return (
      <form onSubmit={handleSubmit(this.props.createPost)} >
        <h3>Create A new Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
        </div>
        <div className="form-group">
        <label>Categories</label>
        <input type="text" className="form-control" {...categories}/>
      </div>
      <div className="form-group">
      <label>Content</label>
      <textarea type="text" className="form-control" {...content}/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }

 
}
// connect : 1st args mapStateToProps, 2nd mapDispatchToProps
// redux form 1st config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form : 'PostsNewForm',
  fields : ['title', 'categories', 'content']
}, null, {createPost})(PostsNew);
