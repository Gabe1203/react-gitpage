import React from 'react';

const UpvotesSection = ({ projectName, upvotes, setProjectInfo }) =>  {

    console.log("hello")

    const upvoteProject = async () => {
        console.log("hello2")
        const result = await fetch(`/api/projects/${projectName}/upvote`, {
            method: 'post',
        });
        console.log(result)
        const body = await result.json();
        console.log(body)
        setProjectInfo(body);
    }
    return (
        <div id="upvotes-section">
        <button onClick={() => upvoteProject()}>Add Upvote</button>
        <p>This post has been upvoted {upvotes} times.</p>
        </div>
    );
}

export default UpvotesSection;