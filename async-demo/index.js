// console.log('before');
//  getUser(1,(user)=>{
 
//    getRepositories(user.gitHubUserName,(repos)=>{
//     getCommits(repos[0],(commits)=>{
//         console.log(commits);
//     });
//    });

//  });

getUser(1)
.then(userObj=>getRepositories(userObj.gitHubUserName))
.then(repos => getCommits(repos[0]))
.then(commits =>console.log('Commits',commits))
async function displayCommits(params) {
    try {
     
    const user = await getUser(1);
    const repos =  await getRepositories(user.gitHubUserName);
    const commits = await getCommits(repos[0]);
    console.log(commits);   
    } catch (error) {
        console.log(error.message);
    }    
}
displayCommits()

function getUser(id) {
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id:id, gitHubUserName:'lindile'})
        }, 2000);
    })
}
function getRepositories(userName) {
    return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log('calling GitHub Api ...');
        resolve(['repo1','repo2','repo3'])
    },2000)

    });
}

function getCommits(repo){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('calling github api...');
        resolve(['commit'])
    
        },2000)
    });
    
    
}