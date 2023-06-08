import { Injectable } from '@nestjs/common';
import { client, findByID } from "./db";

export interface Item {
    _id: string;
    name: string;
    done: boolean;
}

const dbName = "grocery-list";
const collectionName = "items";

@Injectable()
export class AppService {
  async getItems(): Promise<any[]> {
    const connection = await client.connect();
    return connection.db(dbName).collection(collectionName)
        .find()
        .toArray();
  };

  async addItem(name: string): Promise<any> {
    const connection = await client.connect();
    return connection.db(dbName).collection(collectionName)
        .insertOne({ name, done: false });
  };

  async updateItem(id: string, done: boolean): Promise<any> {
    const connection = await client.connect();
    return connection.db(dbName).collection(collectionName)
        .findOneAndUpdate(findByID(id), { $set: { done: done }}, { upsert: true });
  };

  async deleteItem(id: string): Promise<any> {
    const connection = await client.connect();
    return connection.db(dbName).collection(collectionName)
        .findOneAndDelete(findByID(id));
  };
}
