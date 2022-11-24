export interface Members {
    id:                         number;
    name:                       string;
    avatorSrc:                  string;
    memberSince:                number;
    postsAndComments:           number;
    passionateAbout:            string;
    posts: [{
        postId:                 number;
        postTimestamp:          string;
        postTitle:              string;
        postContent:            string;
        postTags:               string;
        comments: [{
            commentId:          number;
            commenterName:      string;
            commenterRemark:    string;
            comments:[{}]
        }]
    }]


}
