import React, { useState } from "react";

class PostForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        title: props.post ? props.post.title : "",
        body: props.expense ? props.expense.body : "",
        createdAt: props.expense ? props.expense.createdAt : 0
      };
    }
    render(){
    return(
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                this.props.onSubmit({
                    title:this.state.title,
                    body:this.state.body,
                    createdAt:this.state.createdAt
                })
            }}>
                <input type="text" placeholder="Post Title" value={this.state.title} onChange={(e)=>{const title=e.target.value; this.setState(() => ({ title }))}}/>
                <input type="text" placeholder="Post Body" value={this.state.body} onChange={(e)=>{const body=e.target.value; this.setState(() => ({ body }))}}/>
                <button >Save Post</button>
            </form>
            
        </div>
    );
        }
}

export default PostForm;