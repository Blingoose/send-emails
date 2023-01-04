import { customErrorAPI } from "./CustomErrorAPI.js";
import { StatusCodes } from "http-status-codes";

export class BadRequest extends customErrorAPI {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
