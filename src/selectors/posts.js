
const getVisiblePosts = (posts,filters)=>(
    posts.filter((post)=>{
        const textMatch = post.title.toLowerCase().includes(filters.text.toLowerCase());
        return textMatch;
    }).sort((a,b)=>{
        if(filters.sortBy === "date"){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(filters.sortBy === "title"){
            return a.title < b.title ? -1 : 1;
        }
        return 0;
    })
)

export default getVisiblePosts;