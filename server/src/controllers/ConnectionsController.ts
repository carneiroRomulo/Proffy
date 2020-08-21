import { Request, Response } from "express";
import dataBase from "../database/connection";

export default class ConnectionsController {
  async index(request: Request, response: Response) {

  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    await dataBase('connections').insert({
      user_id,
    })

    return response.status(201).send();
  }
}