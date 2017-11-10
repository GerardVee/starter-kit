import 'isomorphic-fetch';

export default class Contents
{
    static async all()
    {
        return new Promise(async (resolve, reject) =>
        {
            try
            {
                const _contents = await fetch('http://localhost:3000/contents');
                const contents = await _contents.json();
                resolve(contents);
            }
            catch (error)
            {
                reject(error);
            }
        });
    }
}
