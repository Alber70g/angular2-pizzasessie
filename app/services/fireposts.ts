import * as models from '../models';

export class PostsService {
    data: models.Post[] = [
        {
            title: "Google",
            url: "http://google.nl",
            author: "Albert Groothedde",
            voteCount: 0
        },
        {
            title: "Angular",
            url: "http://angular.io",
            author: "Albert Groothedde",
            voteCount: 2
        },
        {
            title: "Facebook",
            url: "http://facebook.com",
            author: "Albert Groothedde",
            voteCount: -3
        }
    ];
    get(): models.Post[] {
        return this.data;
    }
    add(post: models.Post): void {
        this.data.push(post);
    }
}
