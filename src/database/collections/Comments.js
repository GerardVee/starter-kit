import 'isomorphic-fetch';

export default class Comments
{
    static async all()
    {
        return new Promise(async (resolve, reject) =>
        {
            try
            {
                const _comments = await fetch('http://localhost:3000/comments');
                const comments = await _comments.json();
                resolve(comments);
            }
            catch (error)
            {
                reject(error);
            }
        });
    }
}
