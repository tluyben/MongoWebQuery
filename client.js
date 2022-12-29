
export class ClientMongoAPI {
    //constructor that takes a host, login, password & db as parameters and stores them for future use
    constructor(host, login, password, db) {
        this.host = host;
        this.login = login;
        this.password = password;
        this.db = db;
    }

    async query(collection, query) {
        return await this.sendMongoQuery(collection, query);
    }

    async sendMongoQuery(collection, query) {
        try {
            const response = await fetch(this.host, {
                method: 'POST',
                body: JSON.stringify({
                    login: this.login,
                    pass: this.password,
                    db: this.db,
                    collection,
                    query
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    async upsert(collection, query, update) {
        return await this.sendMongoUpsert(collection, query, update);
    }

    async sendMongoUpsert(collection, query, update) {
        try {
            const response = await fetch(this.host, {
                method: 'POST',
                body: JSON.stringify({
                    login: this.login,
                    pass: this.password,
                    db: this.db,
                    collection,
                    query,
                    update
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    async delete(collection, query) {
        return await this.sendMongoDelete(collection, query);
    }

    async sendMongoDelete(collection, query) {
        try {
            const response = await fetch(this.host, {
                method: 'POST',
                body: JSON.stringify({
                    login: this.login,
                    pass: this.password,
                    db: this.db,
                    collection,
                    query
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }


}