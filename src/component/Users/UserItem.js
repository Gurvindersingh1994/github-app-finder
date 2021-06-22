import React, { Component } from 'react'

class User extends Component {

    // this is the way we create a state inside the class
    state={
    login: 'mojombo',
    id: 'id',
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: 'https://github.com/mojombo'
    };

    render() {

        // there is another way to get the data from state that is by DE-STRUCTURING, shown below.
        const{login, avatar_url}= this.state;
        return (
            <div className='card text-center'>
            <img src={avatar_url} alt="" 
            className='round-img' style= {{width: '60px'}} />
            {/* {{ }} this expression is used to perform inline styling or properties */}

            <h3>{login}</h3> 
             {/* defined and data fetched using  de-structuring mentioned above */}
            <div>
                <a href={this.state.html_url} className="btn btn-dark btn-small my-1">click here</a>
                {/* data fetched using the normal way */}
           
            </div>
            </div>
            


            // lets add the state into the component 
            
            
        )
    }
}

export default User
